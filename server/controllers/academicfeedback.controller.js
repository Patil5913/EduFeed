const AcademicFeedbackModel = require("../models/academicfeedback.model");
const AcademicQuestionModel = require("../models/academicquestion.model");
const userData = require("../models/register.model");

const academicFeedbackController = {
  getMentorQuestions: async (req, res) => {
    try {
      const mentorQuestions = await AcademicQuestionModel.find({}).select(
        "-mentorEmail -_id -__v"
      );
      res.json({
        mentorQuestions: mentorQuestions,
        message: "Mentor Questions Fetched Successfully",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  },
  submitFeedback: async (req, res) => {
    try {
      const { answers, comments } = req.body;

      // Fetch the user's email from the request
      const userEmail = userData.email;

      const feedbackExist = await AcademicFeedbackModel.findOne({
        studentEmail: userEmail,
      });

      if (feedbackExist == null) {
        const newFeedback = new AcademicFeedbackModel({
          studentEmail: userEmail, // Use the fetched email
          answers,
          comments,
        });

        const savedFeedback = await newFeedback.save();

        res.status(201).json({
          feedback: savedFeedback,
          message: "Student Feedback Submitted Successfully",
        });
      } else {
        res.status(208).json({
          message: "Feedback already submitted",
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  },

  getStudentSubmittedDetail: async (req, res) => {
    try {
      const allFeedback = await AcademicFeedbackModel.find({}).select(
        "-answers -_id -__v -comments"
      );
      // const userName = await userData.find({ studentEmail: allFeedback.studentEmail });
      res.json({
        studentDetails: allFeedback,
        // studentName: userName.name,
        message: "All Anonymous Feedback Fetched Successfully",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  },
  getFeedback: async (req, res) => {
    try {
      const allFeedback = await AcademicFeedbackModel.find({}).select(
        "-studentEmail -_id -__v "
      );
      res.json({
        allFeedback: allFeedback,
        message: "All Anonymous Feedback Fetched Successfully",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  },
};

module.exports = academicFeedbackController;

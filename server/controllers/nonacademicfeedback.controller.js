const NonAcademicFeedbackModel = require("../models/nonacademicfeedback.model");
const NonAcademicQuestionModel = require("../models/nonacademicquestion.model");
// const userData = require("../models/register.model");

const academicFeedbackController = {
  getMentorQuestions: async (req, res) => {
    try {
      const mentorQuestions = await NonAcademicQuestionModel.find({}).select(
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
      const { studentEmail, answers, comments } = req.body;
      const feedbackExist = await NonAcademicFeedbackModel.findOne({
        studentEmail: studentEmail,
      });

      if (feedbackExist == null) {
        const newFeedback = new NonAcademicFeedbackModel({
        studentEmail,
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
      const allFeedback = await NonAcademicFeedbackModel.find({}).select(
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
      const allFeedback = await NonAcademicFeedbackModel.find({}).select(
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
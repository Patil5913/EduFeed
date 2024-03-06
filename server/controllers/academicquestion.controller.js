const AcademicFeedbackModel = require("../models/academicfeedback.model");
const userData = require("../models/register.model");
const AcademicQuestionModel = require("../models/academicquestion.model");
const academicFeedbackController = {
  submitQuestions: async (req, res) => {
    try {
      const { mentorEmail, mentorQuestions } = req.body;

      const quesExist = await AcademicQuestionModel.findOne({
        mentorEmail: mentorEmail,
      });
      
      if (quesExist == null) {
        const newFeedback = new AcademicQuestionModel({
          mentorEmail,
          mentorQuestions,
        });
        const savedFeedback = await newFeedback.save();
        res.status(201).json({
          feedback: savedFeedback,
          message: "Questions Submitted Successfully",
        });
      } else {
        res.status(208).json({
          message: "Questions already submitted by this mentor",
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  },
//   getMentorQuestions: async (req, res) => {
//     try {
//       const mentorQuestions = await AcademicFeedbackModel.find({}).select(
//         "-mentorEmail -_id -__v -studentEmail -answers -comments"
//       );
//       res.json({
//         mentorQuestions: mentorQuestions,
//         message: "Mentor Questions Fetched Successfully",
//       });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Internal Server Error", error: error.message });
//     }
//   },
//   submitFeedback: async (req, res) => {
//     try {
//       const { studentEmail, answers, comments } = req.body;
//       const feedbackExist = await AcademicFeedbackModel.findOne({
//         studentEmail: studentEmail,
//       });

//       if (feedbackExist == null) {
//         const newFeedback = new AcademicFeedbackModel({
//         studentEmail,
//         answers,
//         comments,
//       });

//       const savedFeedback = await newFeedback.save();

//       res.status(201).json({
//         feedback: savedFeedback,
//         message: "Student Feedback Submitted Successfully",
//       });
//       } else {
//         res.status(208).json({
//           message: "Feedback already submitted",
//         });
//       }
      
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Internal Server Error", error: error.message });
//     }
//   },

//   getStudentSubmittedDetail: async (req, res) => {
//     try {
//       const allFeedback = await AcademicFeedbackModel.find({}).select(
//         "-answers -mentorEmail -mentorQuestions -_id -__v -comments"
//       );
//       // const userName = await userData.find({ studentEmail: allFeedback.studentEmail });
//       res.json({
//         studentDetails: allFeedback,
//         // studentName: userName.name,
//         message: "All Anonymous Feedback Fetched Successfully",
//       });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Internal Server Error", error: error.message });
//     }
//   },
//   getFeedback: async (req, res) => {
//     try {
//       const allFeedback = await AcademicFeedbackModel.find({}).select(
//         "-studentEmail -mentorEmail -mentorQuestions -_id -__v "
//       );
//       res.json({
//         allFeedback: allFeedback,
//         message: "All Anonymous Feedback Fetched Successfully",
//       });
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Internal Server Error", error: error.message });
//     }
//   },
};

module.exports = academicFeedbackController;

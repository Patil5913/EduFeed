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
};

module.exports = academicFeedbackController;

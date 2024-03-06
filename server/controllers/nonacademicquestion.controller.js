const AcademicFeedbackModel = require("../models/academicfeedback.model");
const userData = require("../models/register.model");
const NonAcademicQuestionModel = require("../models/academicquestion.model");
const academicFeedbackController = {
  submitQuestions: async (req, res) => {
    try {
      const { mentorEmail, mentorQuestions } = req.body;

      const quesExist = await NonAcademicQuestionModel.findOne({
        mentorEmail: mentorEmail,
      });
      
      if (quesExist == null) {
        const newFeedback = new NonAcademicQuestionModel({
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
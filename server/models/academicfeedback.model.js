const mongoose = require("mongoose");

const academicfeedbackSchema = new mongoose.Schema({
  studentEmail: {
    type: String,
  },
  answers: [
    {
      selectedOption: {
        type: String,
        enum: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      },
    },
  ],
  comments: {
    type: String,
  },
});

const academicFeedbackModel = mongoose.model('Academic Feedback', academicfeedbackSchema);

module.exports = academicFeedbackModel;
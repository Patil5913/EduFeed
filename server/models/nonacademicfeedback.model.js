const mongoose = require("mongoose");

const nonacademicfeedbackSchema = new mongoose.Schema({
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

const nonacademicFeedbackModel = mongoose.model('Non Academic Feedback', nonacademicfeedbackSchema);

module.exports = nonacademicFeedbackModel;

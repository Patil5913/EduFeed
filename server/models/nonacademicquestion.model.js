const mongoose = require("mongoose");

const nonacademicquestionSchema = new mongoose.Schema({
  mentorEmail: {
    type: String,
  },
  mentorQuestions: [
    {
      type: String,
    },
  ],
});

const nonacademicquestionModel = mongoose.model('Non Academic Question', nonacademicquestionSchema);

module.exports = nonacademicquestionModel;

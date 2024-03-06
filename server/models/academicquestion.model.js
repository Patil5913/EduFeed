const mongoose = require("mongoose");

const academicquestionSchema = new mongoose.Schema({
  mentorEmail: {
    type: String,
  },
  mentorQuestions: [
    {
      type: String,
    },
  ],
});

const academicquestionModel = mongoose.model('Academic Question', academicquestionSchema);

module.exports = academicquestionModel;

const mongoose = require('mongoose');

const studentDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    prn: { type: String, required: true },
    branch: { type: String, required: true },
    yearofjoining: { type: String, required: true },
});


const studentData = mongoose.model('studentdata', studentDataSchema);

module.exports = studentData;
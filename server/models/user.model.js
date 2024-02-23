const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    prn: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    branch: { type: String, required: true },
    yearofjoining: { type: String, required: true },
    role: { type: String, required: true },
});


const userData = mongoose.model('userdata', userDataSchema);

module.exports = userData;
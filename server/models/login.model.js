const mongoose = require('mongoose');

const loginDataSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginData = mongoose.model('logindata', loginDataSchema);

module.exports = LoginData;
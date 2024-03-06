const express = require("express");
const router = express.Router();
const loginController = require('../controllers/login.controller.js');
const registerController = require('../controllers/register.controller.js');
const academicfeedbackController = require('../controllers/academicfeedback.controller.js');
const academicquestionController = require('../controllers/academicquestion.controller.js');
// const authenticate = require('../middleware/authenticate.js')
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/login", loginController.login);
router.post("/register", registerController.register);
router.get('/getUser', registerController.getAllUsers);
router.post('/submitquestion', academicquestionController.submitQuestions);
router.get('/getquestion', academicfeedbackController.getMentorQuestions);
router.post('/submitfeedback', academicfeedbackController.submitFeedback);
router.get('/getdetails', academicfeedbackController.getStudentSubmittedDetail);
router.get('/getfeedback', academicfeedbackController.getFeedback);

module.exports = router;
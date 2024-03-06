const express = require("express");
const router = express.Router();
const loginController = require('../controllers/login.controller.js');
const registerController = require('../controllers/register.controller.js');
const academicfeedbackController = require('../controllers/academicfeedback.controller.js');
const academicquestionController = require('../controllers/academicquestion.controller.js');
const nonacademicfeedbackController = require('../controllers/nonacademicfeedback.controller.js'); 
const nonacademicquestionController = require('../controllers/nonacademicquestion.controller.js');
// const authenticate = require('../middleware/authenticate.js')
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/login", loginController.login);
router.post("/register", registerController.register);
router.get('/getUser', registerController.getAllUsers);
router.post('/academicsubmitquestion', academicquestionController.submitQuestions);
router.get('/getacademicquestion', academicfeedbackController.getMentorQuestions);
router.post('/submitacademicfeedback', academicfeedbackController.submitFeedback);
router.get('/getacademicdetails', academicfeedbackController.getStudentSubmittedDetail);
router.get('/getacademicfeedback', academicfeedbackController.getFeedback);
router.post('/nonacademicsubmitquestion', nonacademicquestionController.submitQuestions);
router.get('/getnonacademicquestion', nonacademicfeedbackController.getMentorQuestions);
router.post('/submitnonacademicfeedback', nonacademicfeedbackController.submitFeedback);
router.get('/getnonacademicdetails', nonacademicfeedbackController.getStudentSubmittedDetail);
router.get('/getnonacademicfeedback', nonacademicfeedbackController.getFeedback);

module.exports = router;
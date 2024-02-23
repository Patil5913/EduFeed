const express = require("express");
const router = express.Router();
const studentController = require('../controllers/student.controller.js');
const userController = require('../controllers/user.controller.js');

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/addStudent", studentController.addStudent);
router.get('/getStudent', studentController.getAllStudents);
router.post("/addUser", userController.addUser);
router.get('/getUser', userController.getAllUsers);

module.exports = router;
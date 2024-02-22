const express = require("express");
const router = express.Router();
const studentController = require('../controllers/student.controller.js');

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/addStudent", studentController.addStudent);

router.get('/getStudent', studentController.getAllStudents);

module.exports = router;
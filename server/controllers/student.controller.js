const { get } = require("mongoose");
const studentData = require("../models/student.model.js");

const studentDetails = {
    getAllStudents: async (req, res) => {
        try {
            const students = await studentData.find({});
            res.json({
                students: students,
                message: "Student Fetched Successfully",
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
  
    addStudent: async (req, res) => {
        try {
            const student = new studentData({
                name: req.body.name,
                email: req.body.email,
                prn: req.body.prn,
                branch: req.body.branch,
                year: req.body.year,
            });
            const newStudent = await student.save();
            res.status(201).json({
                student: newStudent,
                message: "Student Added Successfully",
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    
}
  module.exports = studentDetails;
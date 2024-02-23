const { get } = require("mongoose");
const userData = require("../models/user.model");

const userDetails = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userData.find({});
            res.json({
                users: users,
                message: "User Fetched Successfully",
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
  
    addUser: async (req, res) => {
        try {
            const user = new userData({
                name: req.body.name,
                email: req.body.email,
                prn: req.body.prn,
                password: req.body.password,
                branch: req.body.branch,
                yearofjoining: req.body.yearofjoining,
                role: req.body.role,
            });
            const newUser = await user.save();
            res.status(201).json({
                user: newUser,
                message: "User Added Successfully",
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    
}
  module.exports = userDetails;
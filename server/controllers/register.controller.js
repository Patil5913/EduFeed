const { get } = require("mongoose");
const registerData = require("../models/register.model");
const bcrypt = require("bcryptjs");
const registerUser = {
  getAllUsers: async (req, res) => {
    try {
      const users = await registerData.find({});
      res.json({
        users: users,
        message: "User Fetched Successfully",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  register: async (req, res) => {
    try {
      const { name, email, prn, password, branch, yearofjoining, role } =
        req.body;

      const saltRound = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, saltRound);
      const userExist = await registerData.findOne({ email: email });

      if (userExist == null) {
        const user = new registerData({
          name,
          email,
          prn,
          password: hashPassword,
          branch,
          yearofjoining,
          role,
        });
        const newUser = await user.save();
        const token = await user.generateAuthToken();
         
        res.status(201).json({
          user: newUser,
          token:token,
          message: "User Added Successfully",
        });
      } else {
        res.status(208).json({
          message: "User already exists",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Error try again later" });
    }
  },
};

module.exports = registerUser;

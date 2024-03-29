const { get } = require("mongoose");
const registerData = require("../models/register.model");
const bcrypt = require("bcryptjs");
const loginUser = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const userExist = await registerData.findOne({ email: email });
      if (!userExist) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      const passwordValid = await bcrypt.compare(password, userExist.password);
      if (passwordValid) {
        // const token = await user.generateAuthToken();
        res.status(201).json({
          token: await userExist.generateAuthToken(),
          name: userExist.name,
          role: userExist.role,
          message: "Login Successful",
        });
      }
      else{
        res.status(401).json({
            message:"invalid email or password"
        })
      }
    } catch (error) {
      res.status(500).json("internal server error");
    }
  },
};
module.exports = loginUser;
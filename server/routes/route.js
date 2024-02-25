const express = require("express");
const router = express.Router();
const loginController = require('../controllers/login.controller.js');
const registerController = require('../controllers/register.controller.js');
const authenticate = require('../middleware/authenticate.js')
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/login", loginController.login);
router.post("/register", registerController.register);
router.get('/getUser', registerController.getAllUsers);

module.exports = router;
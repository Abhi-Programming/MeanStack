const express = require('express');
const app = express();
const authRoute = express.Router();
const userController = new (require('../controllers/user.controller'))();
const { verifySignUp } = require("../middelwares");

// signup
authRoute.route('/signup').post(verifySignUp.checkDuplicateUsernameOrEmail,userController.signup);

authRoute.route('/signIn').post(userController.signin);

module.exports = authRoute;
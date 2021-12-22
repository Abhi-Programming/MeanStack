const express = require('express');
const app = express();
const authRoute = express.Router();
const userController = new (require('../controllers/user.controller'))();
const { verifySignUp } = require("../middelwares");
// Student model
let Student = require('../model/Student');

// signup
authRoute.route('/signup', [
    verifySignUp.checkDuplicateUsernameOrEmail
]).post(userController.signup)

module.exports = authRoute;
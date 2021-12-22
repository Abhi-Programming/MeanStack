const express = require('express');
const app = express();
const studentRoute = express.Router();
const studentController = new (require('../controllers/student'))();

// Student model
let Student = require('../model/Student');

//get All data 
studentRoute.route('/list').get(studentController.getStudents);

// Add Student
studentRoute.route('/add').post(studentController.addStudent)

// Get single student
studentRoute.route('/detail/:id').get(studentController.getDeatilStudent)

// Update student 
studentRoute.route('/update/:id').put(studentController.updateStudent)

// Delete student
studentRoute.route('/delete/:id').delete(studentController.deleteStudent)
 
module.exports = studentRoute;
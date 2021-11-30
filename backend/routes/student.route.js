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
studentRoute.route('/detail/:id').get(studentController.getDeatil)


// studentRoute.route('/add-student').post((req, res, next) => {
//   Student.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     } 
//   })
// });

// // Get all student
// studentRoute.route('/').get((req, res) => {
//   Student.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Get single student
// studentRoute.route('/detail/:id').get((req, res) => {
//   Student.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// Update student
studentRoute.route('/update/:id').put((req, res, next) => {
  Student.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Delete student
studentRoute.route('/delete/:id').delete((req, res, next) => {
  Student.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = studentRoute;
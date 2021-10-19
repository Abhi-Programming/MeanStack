const express = require('express')
const app = express()

const teacherRoute = express.Router();

let Teacher = require('../model/Teacher')


// Add Student
teacherRoute.route('/add-teacher').post((req, res, next) => {
    Teacher.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all student
teacherRoute.route('/').get((req, res) => {
    Teacher.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Get single student
teacherRoute.route('/read-teacher/:id').get((req, res) => {
    Teacher.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update student
teacherRoute.route('/update-teacher/:id').put((req, res, next) => {
    Teacher.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Teacher successfully updated!')
      }
    })
  })

  // Delete student
teacherRoute.route('/delete-tearcher/:id').delete((req, res, next) => {
    Teacher.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  
  module.exports = teacherRoute;
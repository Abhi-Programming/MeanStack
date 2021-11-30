

//modal 
let Student = require('../model/Student');
class studentController {
  getStudents = (req, res) => {
    Student.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.handler.success(data)
      }
    })
  };

  addStudent = (req, res) => {
    Student.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.handler.create()
      }
    })
  }

  getDeatil = (req, res) => {
    Student.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.handler.success(data)
      }
    })
  }

}

module.exports = studentController;
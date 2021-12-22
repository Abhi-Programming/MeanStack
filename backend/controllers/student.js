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

  getDeatilStudent = (req, res) => {
    Student.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.handler.success(data)
      }
    })
  }

  updateStudent = (req, res) => {
    Student.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.handler.success(data)
      }
    })
  }

  deleteStudent = (req, res) =>{
    Student.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  }

}

module.exports = studentController;
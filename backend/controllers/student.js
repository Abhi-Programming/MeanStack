
//modal 
const Student = new (require('../model/Student'))();

class studentController {
    getdata = (req, res) => {
        Student.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
    };
}

module.exports = studentController;
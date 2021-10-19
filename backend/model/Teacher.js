const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Teacher = new Schema({
    teacher_name: {
        type: String
    },
    teacher_email: {
        type: String
    },
    subjects: {
        type: Array
    },
    gender: {
        type: String
    }},
    {
        collection:'teachers'

})

module.exports = mongoose.model('Teacher', Teacher)
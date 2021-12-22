const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
    user_name: {
        type: String
    },
    user_email: {
        type: String
    },
    user_phone: {
        type: Number
    },
    password: {
        type: String
    },
    roles:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }

}, {
    collection: 'User'
})

module.exports = mongoose.model('User', User)
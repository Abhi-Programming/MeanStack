const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Role = new Schema({
    name: {
        type: String
    },
    roleID: {
        type: String
    },
    status: {
        type: String
    }
}, {
    collection: 'Role'
})

module.exports = mongoose.model('Role', Role)
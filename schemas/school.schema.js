const mongoose = require('mongoose')

const School = new mongoose.Schema({
    name: {
        type: String
    },
    specialization: {
        type: String
    },
    yearOfPassing: {
        type: Number
    },
    marks: {
        type: Number
    }
})

module.exports = School;
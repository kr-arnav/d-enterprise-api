const mongoose = require('mongoose')

const GuardianDetails = new mongoose.Schema({
    fatherName: {
        type: String
    },
    fatherMobile: {
        type: Number
    },
    motherName: {
        type: String
    },
    motherMobile: {
        type: Number
    }
})

module.exports = GuardianDetails;
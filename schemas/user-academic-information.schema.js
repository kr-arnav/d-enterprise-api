const mongoose = require('mongoose')

const School = require('./school.schema')

const UserAcademicInformation = new mongoose.Schema({
    twelfth: {
        type: School
    },
    diplomaOrGraduation: {
        type: School
    },
    postGraduation: {
        type: School
    },
    other: {
        type: School
    }
})

module.exports = UserAcademicInformation
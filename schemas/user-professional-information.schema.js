const mongoose = require('mongoose')



const UserProfessionalInformation = new mongoose.Schema({
    organisationName: {
        type: String
    },
    designation: {
        type: String
    },
    natureOfWork: {
        type: String
    },
    fromDate: {
        type: String
    },
    toDate: {
        type: String
    },
    totalExperienceInMonth: {
        type: String
    }
})

module.exports = UserProfessionalInformation
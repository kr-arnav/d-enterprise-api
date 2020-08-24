const mongoose = require('mongoose')

const ContactDetails = new mongoose.Schema({
    cityCode: {
        type: String
    },
    landlineNo: {
        type: String
    },
    mobileNo1: {
        type: String
    },
    mobileNo2: {
        type: String
    }
})

module.exports = ContactDetails
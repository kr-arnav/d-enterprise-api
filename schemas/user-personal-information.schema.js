const mongoose = require('mongoose')

const Name = require('./name.schema')
const ContactDetails = require('./contact-details.schema')
const GuardianDetails = require('./guardian-details.schema')
const Address = require('./address.schema')


const UserPersonalInformation = new mongoose.Schema({
    name: {
        type: Name
    },
    dob: {
        type: Date
    },
    gender: {
        type: String
    },
    contact: {
        type: ContactDetails
    },
    guardian: {
        type: GuardianDetails
    },
    presentAddress: {
        type: Address
    },
    permanentAddress: {
        type: Address
    }
})

module.exports = UserPersonalInformation
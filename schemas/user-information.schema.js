const mongoose = require('mongoose')

const UserPersonalInformation = require("./user-personal-information.schema");
const UserAcademicInformation = require('./user-academic-information.schema');
const UserProfessionalInformation = require('./user-professional-information.schema');
const UserBankAccountInformation = require('./user-bank-account-information.schema');
const AgreedTerms = require('./user-agreed-terms.schema');

const UserInformationSchema = new mongoose.Schema({
    mobile: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    personalInformation: {
        type: UserPersonalInformation
    },
    academicInformation: {
        type: UserAcademicInformation
    },
    professionalInformation: {
        type: UserProfessionalInformation
    },
    bankAccountInformation: {
        type: UserBankAccountInformation
    },
    termsAgreed: {
        type: AgreedTerms
    }
})

module.exports = UserInformationSchema
const mongoose = require('mongoose')
const UserInformationSchema = require('../schemas/user-information.schema');

const UserInformation = mongoose.model('UserInformation', UserInformationSchema)

module.exports = UserInformation
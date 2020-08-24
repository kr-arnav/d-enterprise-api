const mongoose = require('mongoose')

const UserBankAccountInformation = new mongoose.Schema({
    accountNumber: {
        type: String
    },
    bankName: {
        type: String
    },
    branchName: {
        type: String
    },
    ifscCode: {
        type: String
    },
    accountHolderName: {
        type: String
    },
    panCardNo: {
        type: String
    }
})

module.exports = UserBankAccountInformation;
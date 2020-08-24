const mongoose = require('mongoose')

const Address = new mongoose.Schema({
    address: {
        type: String
    },
    pincode: {
        type: Number
    }
})

module.exports = Address;
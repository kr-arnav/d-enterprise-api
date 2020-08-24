const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

module.exports = UserSchema
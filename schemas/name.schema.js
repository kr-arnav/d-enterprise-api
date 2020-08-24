const mongoose = require('mongoose')

const Name = new mongoose.Schema({
    fName: {
        type: String
    },
    mName: {
        type: String
    },
    lName: {
        type: String
    }
})

module.exports = Name;
const mongoose = require('mongoose')


const AgreedTerms = new mongoose.Schema({
    agreed: {
        type: Boolean
    }
})

module.exports = AgreedTerms
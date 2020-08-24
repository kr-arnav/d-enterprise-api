const mongoose = require('mongoose')

const dbUrl = "mongodb://localhost:27017/mre",
    dbConfig = { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true }

mongoose.connect(dbUrl, dbConfig)
    .then(d => console.log('db connected..'))
    .catch(d => console.log("db connection failed!!"))

module.exports = mongoose
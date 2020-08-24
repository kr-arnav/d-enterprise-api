const mongoose = require('mongoose')

const dbUrl = "mongodb+srv://oMongo:oMongo@1@cluster0.9rvoz.mongodb.net/oMongo?retryWrites=true&w=majority/mre",
    dbConfig = { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true }

mongoose.connect(dbUrl, dbConfig)
    .then(d => console.log('db connected..'))
    .catch(d => console.log("db connection failed!!"))

module.exports = mongoose
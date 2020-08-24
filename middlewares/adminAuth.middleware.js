const mongoose = require("../database/db"),
    User = require("../models/user.model")

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let secretKey = 'MYSECRET_KEY'
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.verify(token, secretKey)
    User
        .findOne({ mobile: decodedToken.mobile, role: 'Admin' })
        .then(d => {
            if(d == null){
                res.status(400).json({ message: 'Authorization failed. No such user', data: d})
            }
            else{
                next()
            }
        })
        .catch(d => res.status(400).json({ message: 'Authorization failed', data: d}))
}
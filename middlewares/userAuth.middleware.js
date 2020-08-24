const mongoose = require("../database/db"),
    User = require("../models/user.model")

const jwt = require('jsonwebtoken')

const UserAuthService = (req, res, next) => {
    let secretKey = 'MYSECRET_KEY'
    try {
        const token = req.headers.authorization
        const decodedToken = jwt.verify(token, secretKey)
        User
            .findOne({ mobile: decodedToken.mobile })
            .then(d => {
                if (d == null) {
                    res.status(400).json({ message: 'Authorization failed. No such user', data: d })
                }
                else {
                    next()
                }
            })
            .catch(d => res.status(400).json({ message: 'Authorization failed', data: d }))
    }
    catch (e) {
        res.status(400).json({ message: 'Authorization failed', data: e })
    }

}

module.exports = UserAuthService
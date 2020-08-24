// importing libraries
const express = require('express'),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken')

// other imports
const mongoose = require('../database/db'),
    router = express.Router()

// importing models
const User = require('../models/user.model'),
    auth = require('../middlewares/userAuth.middleware'),
    adminAuth = require('../middlewares/adminAuth.middleware')
const UserInformation = require('../models/user-information.model')

// Routes
router
    .get('/', (req, res) => {
        User
            .find()
            .then(d => res.status(200).json(d))
            .catch(d => res.status(500).json(d))
    })
    .post('/login', (req, res) => {
        let secretKey = 'MYSECRET_KEY'
        User
            .findOne({ mobile: req.body.mobile })
            .then(d => {
                bcrypt
                    .compare(req.body.password, d.password)
                    .then(d => {
                    	if(d) {
                        	const token = jwt.sign({ mobile: req.body.mobile }, secretKey)
                     	   res.status(200).json({ message: 'Login Successful', data: token })
                    	}
                    	else {
                    		res.status(400).json({ message: 'Invalid Password', data: d })
                    	}
                    })
                    .catch(d => res.status(400).json({ message: 'Invalid Password', data: d }))
            })
            .catch(d => res.status(400).json({ message: 'Login Failed. No user found', data: d }))
    })
    .post('/register', (req, res) => {
        console.log(req.body)
        let salt = 10
        User.count({ mobile: req.body.mobile })
            .then(d => {
                if (d > 0) {
                    res.status(400).json({ message: 'User already exists' })
                }
                else {
                    let user = new User()
                    bcrypt
                        .hash(req.body.password, salt)
                        .then(d => {
                            user.mobile = req.body.mobile,
                                user.password = d,
                                user.role = req.body.role
                            user
                                .save()
                                .then(d => {
                                    d.password = null
                                    let userInformation = new UserInformation()
                                    userInformation.mobile = d.mobile
                                    userInformation.role = d.role
                                    userInformation
                                        .save()
                                        .then(_ => res.status(200).json({ message: 'Registered Successfully', data: d }))
                                        .catch(d => res.status(500).json(d))
                                })
                                .catch(d => res.status(500).json(d))
                        })
                        .catch(d => res.status(400).json(d))
                }
            })
    })
    .patch('/', (req, res) => {
        let user = new User(req.body);
        User
            .updateOne({ _id: req.body.mobile }, user)
            .then(d => res.status(200).json({ message: 'Update successful.', data: d }))
            .catch(d => res.status(400).json({ message: 'Update failed', data: d }))
    })
    .delete('/:mobile', (req, res) => {
        User
            .delete({ mobile: req.params.mobile })
            .then(d => res.status(200).json({ message: 'Unsubscribed successfully', data: d }))
            .catch(d => res.status(500).json({ message: 'Something went wrong', data: d }))
    })

module.exports = router;
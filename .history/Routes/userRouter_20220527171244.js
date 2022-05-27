const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const userSchema = require('../Schemas/userSchema')
const User = new mongoose.model('User', userSchema)

router.get('/', (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem On Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})
router.get('/:id', (req, res) => {
    User.findOne({ '_id': req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})


router.put('/:email', (req, res) => {
    const user = req.body
    const newUser = new User(req.body)
    User.findOne({ email: req.params.email }, (err, data) => {
        if (data) {
            res.status(200).send({ message: "user Alrady Available" })
        }
        else {
            newUser.save((err) => {
                if (err) {
                    res.status(500).json({ message: "There is A Problem on Server" })
                }
                else {
                    res.status(200).json({ message: "data deleted" })
                }
            })
        }
    })
})

router.delete('/:id', (req, res) => {
    User.deleteOne({ '_id': req.params.id }, (err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json({ message: "data deleted" })
        }
    })
})

module.exports = router
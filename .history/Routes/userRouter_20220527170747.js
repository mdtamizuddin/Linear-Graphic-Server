const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const reviewSchema = require('../Schemas/reviewsSchema')
const User = new mongoose.model('User', reviewSchema)

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

    User.updateOne({ '_id': req.params.id }, {
        $set: {
            name: review.name,
            image: review.images,
            description: review.description
        }
    }, (err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json({ message: 'data update success' })
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
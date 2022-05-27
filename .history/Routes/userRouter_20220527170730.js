const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const reviewSchema = require('../Schemas/reviewsSchema')
const Review = new mongoose.model('Review', reviewSchema)

router.get('/', (req, res) => {
    Review.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem On Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})
router.get('/:id', (req, res) => {
    Review.findOne({ '_id': req.params.id }, (err, data) => {
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

    Review.updateOne({ '_id': req.params.id }, {
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
    Review.deleteOne({ '_id': req.params.id }, (err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json({ message: "data deleted" })
        }
    })
})

module.exports = router
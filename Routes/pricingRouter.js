const express = require('express')
const mongoose = require('mongoose')
const priceSchema = require('../Schemas/pricingSchema')
const router = express.Router()

const Monthly = new mongoose.model('MonthlyPricing', priceSchema)

router.get('/', (req, res) => {
    Monthly.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem On Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})
router.get('/:id', (req, res) => {
    Monthly.findOne({ '_id': req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})

router.post('/', (req, res) => {
    const newFaq = new Monthly(req.body)
    newFaq.save((err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json({ message: "data inserted success" })
        }
    })
})

router.put('/:id', (req, res) => {
    const pricing = req.body
    Monthly.updateOne({ '_id': req.params.id }, {
        $set: {
            type: pricing.type,
            price: pricing.price,
            service: pricing.services
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
    Monthly.deleteOne({ '_id': req.params.id }, (err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json({ message: "data deleted" })
        }
    })
})

module.exports = router
const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const priceSchema = new mongoose.Schema({
    type :{
        type: String,
        required : true
    },
    price :{
        type: Number,
        required : true
    },
    services:{
        type: Array,
        required: true
    }
})
const MonthlyPricing = new mongoose.model('MonthlyPricing',priceSchema)

router.get('/', (req, res) => {
    MonthlyPricing.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem On Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})
router.get('/:id', (req, res) => {
    MonthlyPricing.findOne({ '_id': req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})

router.post('/', (req, res) => {
    const newPortfolio = new MonthlyPricing(req.body)
    newPortfolio.save((err) => {
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
    MonthlyPricing.updateOne({ '_id': req.params.id }, {
        $set: {
            type: pricing.type,
            price: pricing.price,
            services: pricing.services
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
    MonthlyPricing.deleteOne({ '_id': req.params.id }, (err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json({ message: "data deleted" })
        }
    })
})

module.exports = router
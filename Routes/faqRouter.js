const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const faqSchema = new mongoose.Schema({
    email :{
        type: String,
        required : true
    },
    title :{
        type: String,
        required : true
    },
    desc:{
        type: String,
        required: true
    }
})
const FAQ = new mongoose.model('Faq',faqSchema)

router.get('/', (req, res) => {
    FAQ.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem On Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})
router.get('/:id', (req, res) => {
    FAQ.findOne({ '_id': req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})

router.post('/', (req, res) => {
    const newFaq = new FAQ(req.body)
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
    FAQ.updateOne({ '_id': req.params.id }, {
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
    FAQ.deleteOne({ '_id': req.params.id }, (err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json({ message: "data deleted" })
        }
    })
})

module.exports = router
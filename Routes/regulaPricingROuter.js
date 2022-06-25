const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const regulaSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    }
})
const Regular = new mongoose.model('RegulaPrice', regulaSchema)

router.get('/', (req, res) => {
    Regular.find({}, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem On Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})
router.get('/:id', (req, res) => {
    Regular.findOne({ '_id': req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json(data)
        }
    })
})

router.post('/', (req, res) => {
    const newFaq = new Regular(req.body)
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
    const newPricing = req.body
    const id = req.params.id
    Regular.findByIdAndUpdate(id, { desc: newPricing.desc }, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.delete('/:id', (req, res) => {
    Regular.deleteOne({ '_id': req.params.id }, (err) => {
        if (err) {
            res.status(500).json({ message: "There is A Problem on Server" })
        }
        else {
            res.status(200).json({ message: "data deleted" })
        }
    })
})

module.exports = router
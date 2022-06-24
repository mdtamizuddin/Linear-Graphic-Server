const { Schema } = require('mongoose')
const dateNow = require('../dateNow')()

const priceSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    popular: {
        type: String
    }
})

module.exports = priceSchema
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
    services: {
        type: String,
        required: true
    }
})

module.exports = priceSchema
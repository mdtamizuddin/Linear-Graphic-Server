const { Schema } = require('mongoose')
const dateNow = require('../dateNow')()

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: dateNow
    }
})

module.exports = userSchema
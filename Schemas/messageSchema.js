const { Schema } = require('mongoose')
const dateNow = require('../dateNow')()

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    date: {
        type: String,
        default: dateNow
    }
})

module.exports = messageSchema

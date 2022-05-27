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
    photoURL:{
        type: String,
        required:true
    },
    role:{

    },
    date: {
        type: String,
        default: dateNow
    }
})

module.exports = userSchema
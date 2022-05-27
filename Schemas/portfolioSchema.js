const {Schema} = require('mongoose')
const dateNow = require('../dateNow')()

const portfolioSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    images: {
        type : Object,
        required : true
    },
    date :{
        type : String,
        default : dateNow
    }
})

module.exports = portfolioSchema
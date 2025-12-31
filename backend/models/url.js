const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortUrl : {
        type : String,
        unique : true
    },
    originalUrl : {
        type : String,
        unique : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    clickCount : {
        type : Number,
        default : 0
    }
})

module.exports = mongoose.model('Url', urlSchema);
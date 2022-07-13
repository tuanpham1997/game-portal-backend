const mongoose = require('mongoose')
const Schema = mongoose.Schema

const threadSchema = new Schema ({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    gameid: {
        type: String,
        required: true
    },
    comments: []
}, {
    timestamps: true
})

module.exports = mongoose.model('Thread', threadSchema)

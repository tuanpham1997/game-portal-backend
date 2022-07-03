const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema ({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    gameURL: {
        type: String,
        required: true
    },
    image: String,
    rating: [Number],
    plays: Number,
    description: String,
    categories: []
},{
    timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)
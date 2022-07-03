const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        required: true
    },
    profileAvatar: {
        type: String
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc,ret) {
                delete ret.password
                return ret
            }
        
    }
})

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10)
    return next()
})

module.exports = mongoose.model('User', userSchema)
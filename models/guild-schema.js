const mongoose = require('mongoose')

const optionalString = {
    type: String,
    default: null,
}

const guildSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    banPurgeDays: {
        type: Number,
        default: 7,
}})

module.exports = mongoose.model('guild-configs', guildSchema)
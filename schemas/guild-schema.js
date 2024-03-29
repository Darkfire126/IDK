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
    mutedRoleId: optionalString,
    banPurgeDays: {
        type: Number,
        default: 7,
},
logChannelID: String,
guildID: String,
})

module.exports = mongoose.model('guild-configs', guildSchema)
const mongoose = require('mongoose')

const Shc = mongoose.Schema({
    muteroleid: String,
    guildid: String
})

module.exports = mongoose.model('Muterole', Shc)
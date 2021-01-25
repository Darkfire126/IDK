const mongoose = require('mongoose')

let WarnSchema = new mongoose.Schema({
    guildid: String,
    user: String,
    content: Array
})

module.exports = mongoose.model('warns', WarnSchema)
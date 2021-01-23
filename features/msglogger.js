module.exports = (client) => {
    client.on('message', (message) => {
       // if(message.author.bot || message.channel.type === "dm" ) return;
        //if(message.content === ".") return
       // const m = ( "**" + message.content + "**" + " Sent by, " + message.author.tag + " Sent in " + " " + message.guild.name)
        //client.channels.cache.get('800772910973059072').send(m);
    })
}
module.exports.config = {
    displayName: 'Logger', // Can be changed any time
    dbName: 'LOGGER', // Should be unique and NEVER be changed once set
    loadDBFirst: true, // Wait for the database connection to be present
  }
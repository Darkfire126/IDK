const muterole = require("../../models/muterole")

module.exports = {
    commands: ['setmutedrole', 'setmuterole'],
    minArgs: 1,
    maxArgs: 2,
    ownerOnly: true,
    expectedArgs:'<role id>',
    description: 'set the servers muted role!',
    category: 'Configuration',
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
        if (args[0].toLowerCase() !== 'disable' && args[0].toLowerCase() !== 'enable') {
            return message.channel.send(`
            Usage: muterole <enable disable> <if enable muterole id>
            
            `)}
  const roledb = require("../../models/muterole")

    if(args[0].toLowerCase() === "enable"){
        const roleid = args[1]
        roledb.findOne({ muteroleid: roleid, guildid: message.guild.id }), async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    muteroleid: roleid
            })
    }
    if (args[0].toLowerCase() === "disable") {
        roledb.findOne({ muteroleid: roleid, guildid: message.guild.id }), async(err, data) => {
            if(err) throw err;
            if(data) {
                await db.findOneAndDelete({ muteroleid: roleid, guildid: message.guild.id })
                return message.channel.send("Ok clearing data!")
        }
   if(!data)
        message.channel.send('You do not have any data of a muterole set!')
    }}
    }}
}}
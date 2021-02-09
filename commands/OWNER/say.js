const { MessageEmbed } = require("discord.js")

module.exports = {
    category: "OWNER",
    description: "SMH",
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {
        message.delete()
     
        let messageToSay = args.join(" ")
        const embed = new MessageEmbed()
.setTitle(`...`)
.setDescription(`${messageToSay}`)
.setFooter("yes")
.setTimestamp()
.setColor('RANDOM')
try {
    if(args[0] === '--noembed') {
      let   messageToSay = args.slice(1).join(' ')
        await message.channel.send(`${messageToSay}`)
    }
    if(!args[0] === '--noembed') {
        let messageToSay = args.join(' ')
        await message.channel.send(embed);
    }
} catch(error) {
    console.log(error)
    message.channel.send("I cannot say that!")
}
}

    }
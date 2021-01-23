const { MessageEmbed } = require("discord.js")

module.exports = {
    category: "OWNER",
    description: "SMH",
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {
        message.delete()
        const messageToSay = args.join(" ")
        const embed = new MessageEmbed()
.setTitle(`...`)
.setDescription(`${messageToSay}`)
.setFooter("yes")
.setTimestamp()
.setColor('RANDOM')
try {
    await message.channel.send(embed);
} catch(error) {
    console.log(error)
    message.channel.send("I cannot say that!")
}
}

    }
module.exports = {
    category: "OWNER",
    description: "SMH",
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {
        const {MessageEmbed} = require('discord.js')
        const axios = require('axios')
        const url = 'https://some-random-api.ml/animu/wink';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An Error Occured , Try Again Later`)
        }

        const embed = new MessageEmbed()
        .setTitle(`Wink ig`)
        .setImage(data.link)

        await message.channel.send(embed)
    }
}
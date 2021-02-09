module.exports = {
    category: 'Fun',
    description: 'Someone"s mad ngl',
    expectedArgs: "<@user>",
    callback: async ({ message, args, text, client, prefix, instance }) => {
        const target = message.mentions.users.first() || message.author; // Grab the target.

const avatars = target.displayAvatarURL
message.channel.send(`https://some-random-api.ml/canvas/triggered?avatar=${avatars}`)
    }
}
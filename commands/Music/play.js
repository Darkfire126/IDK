module.exports = {
    category: "Music",
    description: "plays some music",
    aliases: ['p'],
    expectedArgs: "<song>",
    callback: async ({ message, args, text, client, prefix, instance }) => {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

client.distube.play(message, args.join(" "));
    }}
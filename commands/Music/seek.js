module.exports = {
    category: "Music",
    description: "seek some music",
    callback: async ({ message, args, text, client, prefix, instance }) => {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

client.distube.seek(message, Number(args[0]));
}};
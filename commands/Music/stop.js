module.exports = {
    category: "Music",
    description: "stops some music",
    callback: async ({ message, args, text, client, prefix, instance }) => {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);

if(queue) {
    client.distube.stop(message);
    message.channel.send("Stopped the queue!");
}
     if (!queue) {
        return;
    };
}
}
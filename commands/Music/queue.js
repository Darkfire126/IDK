module.exports = {
    category: "Music",
    description: "get the queue of the music",
    callback: async ({ message, args, text, client, prefix, instance }) => {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

        let queue = await client.distube.getQueue(message);

message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
`**${id+1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``
).join("\n"));
}
};
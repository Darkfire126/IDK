module.exports = {
    category: "Music",
    description: "loop some music",
    callback: async ({ message, args, text, client, prefix, instance }) => {
        if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

let mode = client.distube.setRepeatMode(message, parseInt(args[0]));
mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
message.channel.send("Set repeat mode to `" + mode + "`");
}
};
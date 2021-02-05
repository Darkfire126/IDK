
module.exports = {
    category: "Moderation",
    description: 'Nukes a channel.',
    requiredPermissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
message.channel.clone().then((ch) => {
    ch.setParent(message.channel.parent.id)
    ch.setPosition(message.channel.position)
    message.channel.delete()

    ch.send("Nuked :thumbsup:").then(m => m.delete({ timeout: 5000}));
})
}}
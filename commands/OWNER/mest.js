module.exports = {
    category: "OWNER",
    description: "SMH",
    ownerOnly: true,
    callback: async ({ message, args, text, client, prefix, instance }) => {

        client.users.cache.get(args[0]).send(args.slice(1).join(" "));
    }
}
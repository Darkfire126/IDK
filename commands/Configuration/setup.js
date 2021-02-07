module.exports = {
    commands: ['setup', 'start'],
    description: 'the bot will setup the server!',
    category: 'Configuration',
    requiredPermissions: ['ADMINISTRATOR'],
    guildOnly: true,
    callback: async ({ message, args, text, client, prefix, instance, arguments }) => {
   const discord = require('discord.js')
   const filter = msg => msg.author.id === message.author.id;
   const options = {
       max: 1
   }
   
        const users = message.author.tag;
   const Errore = new discord.MessageEmbed()
   .setTitle("There was an error report this to the bot owner!")
   .setColor('RANDOM')
   .setDescription('The owner of the bot id is ' + " 725010310922240007 " + "His user tag is HB - Darkfire - PainXD#1216")
   .setFooter("New Error")
   .setTimestamp()
    //Check if its cancel and cancel
    let collector = await message.channel.awaitMessages(filter, options);
    let answer = collector.first().content;
    message.channel.send('**Starting setup process... Enter `cancel` anytime to end the process.**')
    message.channel.send("I am going to make moderation logs, and type in the name of the lowest role that can view it, DO NOT PING IT, say the name of it! `Note: case sensitive`")
    if (answer === 'cancel' || answer === 'Cancel') {
        message.channel.send('**Setup process ended, requested by administrator.**')
        return;
    }
      //Find the role and check if it exists
      let minrole = message.guild.roles.cache.find(x => x.name === answer)

      if (!minrole) {
          message.channel.send('**OOF! I could not find the role. Maybe try doing the command again.**')
          return
      }
      await message.channel.send('Great! Which category should I create the channel in? Say the name of it please! `Note: case sensitive`')

      let collector2 = await message.channel.awaitMessages(filter, options);
      let answer2 = collector2.first().content;
      if (answer2 === 'cancel' || answer2 === 'Cancel') {
        message.channel.send('**Setup process ended, requested by administrator.**')
        return;
    }

    //Find category and check if it exists
    let category = message.guild.channels.cache.find(cat => cat.name === `${answer2}` && cat.type === 'category')
    if (!category) {
        message.channel.send('**OOF! I could not find the category. Maybe try doing the command again.**')
        return
    }
    await message.channel.send('Alright. Would you like me to create a welcome and goodbye channel, Please respond with a `yes` or `no`.')

    let collector3 = await message.channel.awaitMessages(filter, options);
    let answer3 = collector3.first().content;

    if (answer3 === 'cancel' || answer3 === 'Cancel') {
        message.channel.send('**Setup process ended, requested by administrator.**')
        return;
    }
       //Create channel
       if (answer3 === 'yes' || answer3 === 'Yes') {
        message.guild.channels.create('S-welcome', {
            type: 'text',
            reason: 'yesing',
            topic: `Welcome to ${message.guild.name} !`
        })
        message.guild.channels.create('S-goodbye', {
            type: 'text',
            reason: 'yesing',
        })

        message.channel.send('Good job you did it!')
    } else if (answer3 === 'no' || answer3 === 'No') {
        message.channel.send('**OOF! Enojoy this bot though ngl**')
    }
    message.guild.channels.create('S-modlog', {
        reason: 'Created using setup command, modlog for Sadly commands.',
        type: 'text',
        topic: 'Any major commands get logged here.',
        permissionOverwrites: [{
                id: minrole.id,
                allow: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY"]
            },
            {
                id: message.guild.id,
                deny: ["CREATE_INSTANT_INVITE", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS"]
            },
        ],
        parent: category.id
    }).catch(console.error)




   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    message.channel.send('Setup is good ngl')

    }
}
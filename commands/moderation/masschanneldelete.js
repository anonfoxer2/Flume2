const commando = require('discord.js-commando');

class massDeleteChannel extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'channelwipe',
            group: 'moderation',
            memberName: 'channelwipe',
            description: 'Deletes all channels in a server. Useful for cleaning up server \"nukes\". Use with caution.'
        })
    }

    

    async run(message, args) {
        let serverID = message.guild.id
        let filter = m => m.author.id === message.author.id
    message.channel.send('Are you sure you want to delete ALL CHANNELS from the server? \`YES\` / \`NO\`').then(() => {
      message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000,
          errors: ['time']
        })
        .then(message => {
          message = message.first()
          if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
            message.channel.send('Command confirmed. Deleting all channels in the server.');
            if (message.member.hasPermission("MANAGE_CHANNELS")) {
                try { message.guild.channels.cache.forEach(channel => channel.delete());console.log("A server just ran &channelwipe.\nServer ID: " + serverID + "\nUser ID: " + message.author.id + ".")}
                catch{message.reply(":warning: Command failed. You do not have sufficient permissions to run this command.");}
            }
          } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
            message.channel.send('Command cancelled: User cancelled action.');
          } else {
            message.channel.send('Command cancelled: Invalid response.');
          }
        })
        .catch(collected => {
            message.channel.send('Command cancelled: Response timed out');
        });
    })
    }
}

module.exports = massDeleteChannel
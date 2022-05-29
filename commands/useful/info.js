const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');

class inform extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'useful',
            memberName: 'info',
            description: 'Gives information about the bot!'
        })
    }

    async run(message, args) {

        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#8336d6')
        .setTitle('Bot info')
        .setURL('https://github.com/anonfoxer2/Flume2')
        .setAuthor('FlumeBot', 'https://i.imgur.com/agTGFwL.png', 'https://github.com/anonfoxer2/Flume2')
        .setDescription('Bot information')
            .addFields(
                { name: 'What is Flume?', value: 'Flume is a small Discord bot aimed at small servers with fun and moderation in mind.' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Made by', value: 'anonfoxer', inline: true },
                { name: 'Important Announcement', value: 'Flume is currently undergoing another rewrite for 3.0 to include support for slash commands, though this update will not be pushed to the public bot until neccissarry.' },
                { name: 'Permissions needed', value: 'Admin privs, manage roles, kick & ban, attatch files, manage messages.', inline: true },
            )
        try {
            message.channel.send(infoEmbed);
        }
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err);
        }
    }
}

module.exports = inform
const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client

class changeLog extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'changelog',
            group: 'useful',
            memberName: 'changelog',
            description: 'View the Changelog!'
        })
    }

    async run(message, args) {

        const changelogEmbed = new Discord.MessageEmbed()
            .setColor('#8336d6')
            .setTitle('Changelog')
            .setURL('https://github.com/anonfoxer2/Flume2')
            .setAuthor('FlumeBot', 'https://i.imgur.com/agTGFwL.png', 'https://github.com/anonfoxer2/Flume2')
            .setThumbnail('https://i.imgur.com/VH3jv7d.jpg')
            .addFields(
                { name: 'Changes in v2.5.5', value: '- Updated all refrences to the old GitHub repo to the new repo\n' },
            )


        message.channel.send(changelogEmbed);
        }

}

module.exports = changeLog
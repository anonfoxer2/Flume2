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
            .setURL('https://github.com/anonfoxer/FlumeBot')
            .setAuthor('FlumeBot', 'https://i.imgur.com/agTGFwL.png', 'https://github.com/anonfoxer/FlumeBot')
            .setThumbnail('https://i.imgur.com/VH3jv7d.jpg')
            .addFields(
                { name: 'Changes in v2.5.4', value: '- Fixed empty message throws in &cupid, &cringe, all commands uing an array for a response function\n- Added &lutehelp for use within The Bard\'s Guild <3\n- Added &channelwipe for clearing up mass channels made by server "nukes".\n- Renamed &cat to &echo.\n- Turned off the on edit messages.\n- Added more strats to &stratroulette.' },
            )


        message.channel.send(changelogEmbed);
        }

}

module.exports = changeLog
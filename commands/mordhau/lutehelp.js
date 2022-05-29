const commando = require('discord.js-commando');
const Discord = require('discord.js'); //create client

class luteHelp extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lutehelp',
            group: 'mordhau',
            memberName: 'lutehelp',
            description: 'Answers to FAQ surrounding LuteMod and LuteBot'
        })
    }

    async run(message, args) {
        try {
            const helpembed = new Discord.MessageEmbed()
                .setColor('#8336d6')
                .setTitle('LuteMod & LuteBot FAQ')
	            .setURL('https://github.com/anonfoxer2/Flume2')
                .setAuthor('FlumeBot', 'https://i.imgur.com/agTGFwL.png', 'https://github.com/anonfoxer2/Flume2')
	            .setDescription('Hopefully this willanswer your question!')
                .addFields(
                    { name: 'It spams the chat!', value: 'Make sure your open console key is set to Page Down in both LuteBot and in game.'},
                    { name: 'I get the /Game/Mordhau/Maps/ClientModMap error!', value:'In patch 24, you need to uninstall the modloader and remove its code from Engine.ini and Game.ini'},
                    { name: 'I did the workaround and it didn\'t work!',value:'Make sure that you are 100% sure you made no typos and are typing the correct path, where the lutemod pak is located. You still need to have the lutemod pak file installed.'},
                    { name: 'I can\'t hear anything!',value:'Make sure your volume is up, that the midi doesnt have large gaps in it, make sure the midi isn\'t corrupted, and make sure your audio devices are working correctly' },
                    { name: 'I see messages in the console but I can\'t hear anything!',value:'Make sure whatever opens your console cannot send any text.' },
                    { name: 'My lute sounds out of tune/really low!', value:'Make sure you have your note count set to 60 and the midi matches this range before playing it or saving your partition.'},
                    { name: 'How do I install lutemod?', value:'https://www.youtube.com/watch?v=9P-OcEezxN0'}
                )

            message.channel.send(helpembed);
        }
        catch(err) {
            message.reply("An error occured: " + err);
        }
    }
}

module.exports = luteHelp
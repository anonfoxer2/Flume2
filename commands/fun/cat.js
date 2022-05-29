const commando = require('discord.js-commando');

class cat extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'echo',
            group: 'fun',
            memberName: 'echo',
            description: 'The bot repeats what you tell it to!',
            examples: ['&echo Flume is a dumb bot']
        })
    }

    async run(message, args) {
        try {
            message.delete();
            message.channel.send(message.content.slice(5, message.content.length));
        }
        catch(err) {
            message.reply("An error occured, contact anonfoxer#8098. Error details: " + err);
        }
    }
}

module.exports = cat
const Discord = require('discord.js'); //create client
const commando = require('discord.js-commando');
const {TOKEN} = require('./secret');
const {OWNERID} = require('./secret');


const bot = new commando.Client({
    commandPrefix: '&',
    
    owner: OWNERID,

    disableEveryone: true
});

/* Flume 2.5.5 - What's new?
    - Updated all refrences to the old GitHub repo to the new repo
*/

bot.on('ready', ( ) => {
    bot.user.setActivity('&help | v2.5.5 ');
    console.log("FlumeBot Online! v2.5.5 ");
})



/* allocate commands */
registerCommands();

function registerCommands() { //registers all commands. 
    bot.registry.registerGroup('fun', 'Fun');
    bot.registry.registerGroup('useful', 'Useful');
    bot.registry.registerGroup('moderation', 'Moderation');
    bot.registry.registerGroup('copypasta', 'Copypasta');
//    bot.registry.registerGroup('aminals', 'Aminals'); nuetering this function in 2.5.3 for saftey. once a safe API is found, this will be re-enabled, hopefully.
    bot.registry.registerGroup('actions', 'Actions');
    bot.registry.registerGroup('mordhau', 'mordhau');
    bot.registry.registerDefaults(); //Registers default commands
    bot.registry.registerCommandsIn(__dirname + "/commands"); //commands found in <dicrec>\commands.
}

//editing message responses
/* let responses = [
    "oh? did you fuck up? did you make an oopsie there? i saw that, fuck you.",
    "lol, look at this orphan, they can't spell.",
    "HURR DURR, I MADE A FUCKY WUCKY NOW I HAVE TO EDIT MY MESSAGE HURRRRRR",
    "i saw that.",
    "oh? you thought we wouldn't see that? fuck you.",
    "stupid dumbass idiot, can't spekl...wait shit",
    "made an oopsie there? don't worry, i won't tell anyone.",
    "did that have a little boo boo?",
    "try again lol",
    "haha, u fucked up",
    "oh? oh you screwed up? oh thats a shame. that's such a shame. dumbass.",
    "woah there, thought we wouldn't see that?"
];~

bot.on('messageUpdate', ( message ) => { //whenever you make an edit to a message it will tease you.
    if(message.editedTimestamp = null || message.embeds > 0) return
    let result = responses[Math.floor(Math.random()*(responses.length)-1)] 
    message.channel.send(result);
}) */
/* ----------------------
Neutered this feature until i can iron out its bugs :( */

bot.login(TOKEN);
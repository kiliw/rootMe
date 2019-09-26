// Create the configuratio

var nickname = "jotscho";
var config = {
    channels: ["#root-me_challenge"],
    server: "irc.root-me.org",
    botName: "Johbot"
};

// Get the libs
var irc = require("irc");
var atob = require("atob");

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

bot.addListener('error', function (message) {
    console.log('error: ', message)
})


// Listen for any message, PM said user when he posts
bot.addListener("pm", function (nick, text, message) {
    if (nick == nickname) {
        bot.say("Candy", "!ep2");
    }
});
var i = 0;
bot.addListener("pm", function (nick, text, message) {
    if (nick == "Candy") {
        console.log(text)
        if (i == 0) {
            var decodedData = atob(text);
            console.log(decodedData)
            var response = "!ep2 -rep " + decodedData;
            console.log(response);
            bot.say("Candy", response)
            i++;
        }
    }
});


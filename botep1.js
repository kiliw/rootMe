
// Create the configuration
var nickname = "jotscho"
var config = {
    channels: ["#root-me_challenge"],
    server: "irc.root-me.org",
    botName: "Johbot"
};

// Get the libs
var irc = require("irc");

// Create the bot name
var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

bot.addListener('error', function (message) {
    console.log('error: ', message)
})


// Listen for any message, PM said user when he posts
bot.addListener("pm", function (nick, text, message) {
    if (nick == nickname){
    bot.say("Candy", "!ep1");
    }
});
var i = 0

bot.addListener("pm", function (nick, text, message) {
    if (nick == "Candy"){
    console.log(text)
    if (i == 0) {
        var number = text.split("/");
        var x = Math.sqrt(number[0]) * number[1]
        var x = x.toFixed(2)
        var response = "!ep1 -rep " + x
        console.log(response);
        bot.say("Candy", response)
        i++;
    }}
});


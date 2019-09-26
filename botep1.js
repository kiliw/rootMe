function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

// Create the configuration
var config = {
    channels: ["#root-me_challenge"],
    server: "irc.root-me.org",
    botName: "Johbot"
};

// Get the lib
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
    if (nick == "jotscho"){
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


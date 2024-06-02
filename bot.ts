import { Bot } from "https://deno.land/x/grammy@v1.24.0/mod.ts";

// Create an instance of the `Bot` class and pass your bot token to it. 
export const bot = new Bot("7013563671:AAEPqPGu-J_GVdthbiJDWdxWopPUyxAQAvE"); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));
bot.start()
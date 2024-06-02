import { serve } from "https://deno.land/std@0.154.0/http/server.ts";

import { Bot } from "https://deno.land/x/grammy@v1.24.0/mod.ts";
import { webhookCallback } from "../smartfx/deps.deno.ts";


// Create an instance of the `Bot` class and pass your bot token to it. 
 export const bot = new Bot("7013563671:AAEPqPGu-J_GVdthbiJDWdxWopPUyxAQAvE"); // <-- put your bot token between the ""

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();













const handleUpdate = webhookCallback(bot, "std/http");
serve(async (req) => {
  if (req.method == "POST") {
    const url = new URL(req.url);
    if (url.pathname.slice(1) == bot.token) {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
      }
    }
  }
  return new Response();
});

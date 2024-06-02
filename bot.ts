import { Bot } from "https://deno.land/x/grammy@v1.24.0/mod.ts";

export const bot = new Bot("7013563671:AAEPqPGu-J_GVdthbiJDWdxWopPUyxAQAvE"); // <-- put your bot token between the ""

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.command("ready", (ctx) => ctx.reply("Hello!"));

bot.start()
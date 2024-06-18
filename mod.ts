import { Bot, Keyboard } from "https://deno.land/x/grammy@v1.24.0/mod.ts";
export const bot = new Bot("7377106182:AAGOS0_xvyFiG8eU8zTtb6Cde3hjB41Z7Wc"); // old(aron) => 7013563671:AAEPqPGu-J_GVdthbiJDWdxWopPUyxAQAvE

// Build a custom keyboard:
const keyboard = new Keyboard()
    .text('Join our community').text('Invite Friends').row()
    .text('Register and get 300 Birr reward')



bot.command("start", async (ctx) => {
    const user = ctx.message?.from.first_name; // the message object
    // Send the menu.
    await ctx.reply(`Welcome to SmartFx bot `, { reply_markup: keyboard });
});

bot.on(":text", async (ctx) => {
    const message = ctx.message; // the message object
    if (!message) return;

    if (message.text === "Join our community") {
        return await ctx.reply("Click here to join our main channel:    https://t.me/+5IyRGnhrSvcxNmU0", { reply_markup: keyboard });
    }
    if (message.text === "Invite Friends") {
        return await ctx.reply("Click here to invite your friends:    https://t.me/+5IyRGnhrSvcxNmU0", { reply_markup: keyboard });
    }
    if (message.text === "Register and get 300 Birr reward") {

        return await ctx.reply("Enter your bank account to get 300 Birr reward", { reply_markup: keyboard });
    }
    if (message.text.length >= 10) {
        return await ctx.reply("Thankyou to register this bot", { reply_markup: keyboard });
    } else {
        return await ctx.reply("Invalid account, please try again!", { reply_markup: keyboard });
    }

});

bot.start();


// docker run -e BOT_TOKEN="7377106182:AAGOS0_xvyFiG8eU8zTtb6Cde3hjB41Z7Wc" my-telegram-bot
import { Bot, Keyboard } from "https://deno.land/x/grammy@v1.24.0/mod.ts";
export const bot = new Bot("7377106182:AAGOS0_xvyFiG8eU8zTtb6Cde3hjB41Z7Wc"); // old(aron) => 7013563671:AAEPqPGu-J_GVdthbiJDWdxWopPUyxAQAvE

// Build a custom keyboard:
const keyboard = new Keyboard()
    .text('Join our community').text('Invite Friends').row()
    .text('Register and get 300 Birr reward')



bot.command("start", async (ctx) => {
    console.log(ctx);
    const user = ctx.message?.from.first_name; // the message object
    // Send the menu.
    await ctx.reply(`Welcome to SmartFx ${user}`, { reply_markup: keyboard });
});

bot.on(":text", async (ctx) => {
    console.log(ctx);
    const user = ctx.message?.from.first_name; //
    const message = ctx.message; // the message object
    if (!message) return;

    if (message.text === "Join our community") {
        return await ctx.reply("Click here to join our main channel:    https://t.me/davidosod");
    }
    if (message.text === "Invite Friends") {
        return await ctx.reply("Click here to invite your friends:    https://t.me/davidosod");
    }
    if (message.text === "Register and get 300 Birr reward") {
        return await ctx.reply("Enter your bank account to get 300 Birr reward");
    }
});

bot.start();
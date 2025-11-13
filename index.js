const TelegramBot = require(`node-telegram-bot-api`)

const TOKEN = "8451184772:AAG1bHl6oWR8Vr0slHZqmhhadqJ0XRyGrPc"

const bot = new TelegramBot(TOKEN, {polling: true})  

bot.on("message", (msg) => {
    console.log(msg);
    const chatID = msg.chat.id;
    const text = msg.text;
    const firstName = msg.chat.first_name;

    if (text =="/start" || text == "Boshlash 🔥") {
         bot.sendMessage(
            chatID,
            `
            👋 Assalomu alaykum, ${firstName}!

📚 100x o‘quv markazining rasmiy botiga xush kelibsiz!

Bu bot orqali siz:
• Kurslarimiz haqida batafsil ma’lumot olasiz  
• Kurslarga onlayn ro‘yxatdan o‘tishingiz mumkin  
• Jadval va to‘lovlar haqida ma’lumot olasiz  

Quyidagi menyudan kerakli bo‘limni tanlang 👇
`
         )
    }

});


































console.log("ishga tushdi!!!!!!!!!!!!!!");

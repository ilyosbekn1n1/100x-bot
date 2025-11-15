const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "8451184772:AAG1bHl6oWR8Vr0slHZqmhhadqJ0XRyGrPc";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (msg) => {
  console.log(msg);
  const chatID = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;

  if (text == "/start" || text == "Boshlash 🔥") {
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
`,
      {
        reply_markup: {
          keyboard: [[{text:"Boshlash 🔥"},{text: "Kurslar 📚"},{text: "Ro‘yxatdan o‘tish 📝"}]],
          resize_keyboard: true,
        },
      }
    );
  } else if (text == "Kurslar 📚") {
    bot.sendMessage(
      chatID,
      `🎓 Bizning o‘quv markazimizdagi mavjud kurslar:

Quyidagi ro‘yxatdan kursni tanlang va batafsil ma’lumot oling 👇`
,
{reply_markup: {
          inline_keyboard: [
            [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
                    [{ text: "🇷🇺 Rus tili", callback_data: "course_russian" }],
                    [{ text: "🧮 Matematika", callback_data: "course_math" }],
                    [{ text: "💻 Dasturlash", callback_data: "course_programming" }],
                    [{ text: "🎨 Grafik dizayn", callback_data: "course_design" }],
          ],
          resize_keyboard: true,
        },}
    );
  }
});

bot.on("callback_query", function (query) {
  console.log(query);
  const data = query.data;
  const chatId = query.message.chat.id;
if (data == "course_english") {
    bot.sendMessage(chatId, `🇬🇧 Ingliz tili kursi haqida:

📆 Davomiyligi: 3 oy  
⏰ Darslar: Haftasiga 3 marta (1,5 soatdan)  
👨‍🏫 O‘qituvchi: Tajribali filologlar  
💰 Narxi: 450 000 so‘m / oy

✍️ Agar sizni bu kurs qiziqtirsa, “Ro‘yxatdan o‘tish” tugmasini bosing.
` )
}else if (data == "course_russian") {
    bot.sendMessage(chatId, `
     🇷🇺 Rus tili kursi haqida:

📘 Bosqichlar: Boshlang‘ich va O‘rta daraja  
📆 Davomiyligi: 2,5 oy  
⏰ Darslar: Haftasiga 3 marta, 1,5 soatdan  
👩‍🏫 O‘qituvchilar: Rus tili bo‘yicha tajribali mutaxassislar  
💰 Narxi: 400 000 so‘m / oy  
📍 Joylashuv: Chilonzor, Toshkent

✍️ Kursga yozilmoqchimisiz? “Ro‘yxatdan o‘tish” tugmasini bosing
   `)
}else if (data == "course_math") {
    bot.sendMessage(chatId, `
  🧮 Matematika kursi haqida:

🎯 Yo‘nalishlar:
• Maktab o‘quvchilari uchun (5–11-sinf)  
• Abituriyentlar uchun (DTM tayyorlov)  

📆 Davomiyligi: 3 oy  
⏰ Darslar: Haftasiga 3 marta  
💰 Narxi: 400 000 so‘m / oy  
👨‍🏫 O‘qituvchi: Tajribali o‘qituvchilar  
📍 Joylashuv: Chilonzor, Toshkent

✍️ Kursga yozilish uchun “Ro‘yxatdan o‘tish” tugmasini bosing
  `)
} else if (data == "course_programming") {
    bot.sendMessage(chatId, `
💻 Dasturlash kursi haqida:

📘 Yo‘nalishlar:
• Python dasturlash tili  
• Web dasturlash (HTML, CSS, JavaScript, Node.js)  

📆 Davomiyligi: 4 oy  
⏰ Darslar: Haftasiga 3 marta, 2 soatdan  
👨‍🏫 Mentorlar: Amaliy tajribaga ega IT mutaxassislar  
💰 Narxi: 550 000 so‘m / oy  
📍 Joylashuv: Chilonzor, Toshkent

✍️ Ro‘yxatdan o‘tish uchun “Ro‘yxatdan o‘tish” tugmasini bosin

`)
} else if (data == "course_design") {
    bot.sendMessage(chatId, `
 🎨 Grafik dizayn kursi haqida:

🖥 Dasturlar: Adobe Photoshop, Illustrator, Canva  
📆 Davomiyligi: 3 oy  
⏰ Darslar: Haftasiga 3 marta, 2 soatdan  
👨‍🏫 Ustozlar: Tajribali dizaynerlar  
💰 Narxi: 500 000 so‘m / oy  
📍 Joylashuv: Chilonzor, Toshkent

✍️ Agar siz dizayn sohasida o‘qishni istasangiz, quyidagi tugmani bosing:

`)
} else if (data == "manzil") {
    bot.sendLocation(chatId, 41.3870256, 60.3626525 )
}
 });

console.log("ishga tushdi!!!!!!!!!!!!!!");

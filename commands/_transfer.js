/*CMD
  command: /transfer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

BBAdmin.installBot({
  // bot will be cloned to this email
  email: params,
  // see bot id in the app -> Bots -> Bot
  bot_id: bot.id
})
Bot.sendMessage("done")

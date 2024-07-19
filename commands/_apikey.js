/*CMD
  command: /apikey
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!message) {
  return
}
// cancell
if (message == "❌ Cancel") {
  return Api.sendMessage({
    text: "cancel",
    reply_markup: JSON.stringify({
      hide_keyboard: true
    })
  })
}
// continue
Bot.sendKeyboard("💵 Balance\n➕ Deposit,➖ Withdrawal\n🔑 Change Merchant API Key", "API key access")
User.setProperty("privateKey",message,"string")

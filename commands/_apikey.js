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

if (!message) return;

// Cancel
if (message === "❌ Cancel") {
  return Api.sendMessage({
    text: "cancel",
    reply_markup: JSON.stringify({ hide_keyboard: true })
  });
}

// Continue
Bot.sendKeyboard(
  "💵 Balance\n➕ Deposit,💱 Swap,➖ Withdrawal\n🔑 Change Merchant API Key",
  "API key access"
);
User.setProperty("privateKey", message, "string");

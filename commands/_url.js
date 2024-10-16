/*CMD
  command: /url
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
➡️* send me your LowRateFee merchant URL*

If you don’t have, Go to @PayLowRateFeeBot Documents section copy the URL
  ANSWER
  keyboard: ❌ Cancel
  aliases: 
  group: 
CMD*/

if (message.includes("https://")) {
  User.setProperty("URL", message, "string");
  Bot.sendKeyboard(
    "💵 Balance\n➕ Deposit,➖ Withdrawal\n🔑 Change Merchant API Key",
    "New URL set up."
  );
  return;
}

Api.sendMessage({
  text: "cancel/wrong URL.",
  reply_markup: JSON.stringify({ hide_keyboard: true })
});

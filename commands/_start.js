/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (!User.getProperty("oneTime")) {
  HTTP.post({
    url: urlBroadcast,
    body: { user: user.telegramid, key: "save", data_name: dataName }
  });
  User.setProperty("oneTime", true, "string");
}

if (!privateKey) {
  Bot.runCommand("/apikey");
  Bot.sendKeyboard(
    "❌ Cancel",
    `➡️ *send me your LowRateFee merchant API key*

If you don’t have it, go to @PayLowRateFeeBot Wallet section. View Spoiler to get your "Private key", which will serve as your credentials to communicate with LowRateFeeBot!`
  );
  return;
}

// Continue
var name = user.first_name || user.last_name || user.username;
Bot.sendKeyboard(
  "💵 Balance\n➕ Deposit,➖ Withdrawal\n🔑 Change Merchant API Key",
  "Welcome " + name + "!"
);

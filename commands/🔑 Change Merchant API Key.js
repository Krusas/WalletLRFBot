/*CMD
  command: 🔑 Change Merchant API Key
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!privateKey) {
  Bot.runCommand("/apikey");
  return Bot.sendKeyboard(
    "❌ Cancel",
    `➡️ *Send me your LowRateFee merchant API key*

If you don’t have one, go to @PayLowRateFeeBot Wallet section and view the Spoiler to obtain your "Private key," which will serve as your credentials to communicate with LowRateFeeBot!`
  );
}

Bot.sendKeyboard(
  "❌ Cancel",
  `ℹ️ To change the merchant API key, just send the new one.

🔑 *Current active merchant API key*:\n${privateKey}`
);
Bot.runCommand("/apikey");

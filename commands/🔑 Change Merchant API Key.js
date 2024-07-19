/*CMD
  command: 🔑 Change Merchant API Key
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!privateKey) {
  Bot.runCommand("/apikey")
  return Bot.sendKeyboard(
    "❌ Cancel",
    `➡️ *send me your LowRateFee merchant API key*

If you don’t have, Go to @LowRateFeeBot Wallet section View Spoiler to obtain your "Private key", which will serve as your credentials to communicate with LowRateFeeBot!`
  )
}
Bot.sendKeyboard(
  "❌ Cancel",
  `ℹ️ To change the merchant API key, just enough to send the new one.

🔑 Current active merchant API key:
${privateKey}`
)
Bot.runCommand("/apikey")


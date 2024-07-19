/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
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
// continue
var name = user.first_name
  ? user.first_name
  : user.last_name
  ? user.last_name
  : user.username
Bot.sendKeyboard(
  "💵 Balance\n➕ Deposit,➖ Withdrawal\n🔑 Change Merchant API Key",
  "Welcome " + name + "!"
)


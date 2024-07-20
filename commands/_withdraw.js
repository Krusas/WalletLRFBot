/*CMD
  command: /withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!params && content) {
  return
}
var prms = params.split(" ")
var amount = prms[0]
var currency = prms[1]
var address = prms[2]
Bot.run({
  command: "/onWithdraw",
  options: { amount: amount, currency: currency, address: address }
})
if (amount == "false") {
  return Bot.sendMessage("➡️* Send amount " + currency + "*")
}

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

if (content) {
  var json = JSON.parse(content)
  if (json.message) {
    Bot.sendMessage("*Withdrawal has been created 1-5 minutes to get txhash*")
  } else {
    Bot.sendMessage(inspect(content))
  }
  return
}
if (params) {
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
}
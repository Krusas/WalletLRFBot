/*CMD
  command: /onWithdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!options) {
  return
}
var amount = options.amount === "false" ? false : options.amount
var address = options.address === "false" ? false : options.address
// currency
var currency = options.currency

if (!amount) {
  Bot.sendMessage(`*➡️ Send address ${currency} to withdraw*.`)
  Bot.run({
    command: "/onWithdraw",
    options: { amount: message, currency: currency, address: address }
  })
  return
}

if (!address) {
  // Withdrawal
  var webhook = Libs.Webhooks.getUrlFor({
    command: "/completeWithdraw",
    user_id: user.id
  })

  HTTP.post({
    url: url,
    body: {
      key: "send",
      currency: currency,
      amount: amount,
      address: message,
      private_key: privateKey,
      callback: webhook
    },
    background: true,
    success: "/withdraw"
  })
  return
}

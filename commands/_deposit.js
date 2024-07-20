/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!params && content) {
  const json = JSON.parse(content)
  // Bot.inspect(json) GET FULL DETAILS
  var TextAddress = "Deposit to this address: `" + json.address + "`" // TEXT GENERATED ADDRESS
  var TextHash = `Deposit complete *${json.amount} ${json.currency}*\n\nHash: ${json.hash}` // TEXT HASH SUCCESS DEPOSIT.
  // TEXT
  const text = json.address
    ? TextAddress
    : json.hash
    ? TextHash
    : inspect(content)
  return Bot.sendMessage(text)
}

const webhook = Libs.Webhooks.getUrlFor({
  command: "/deposit",
  user_id: user.id
})

HTTP.post({
  url: url,
  body: {
    key: "receive",
    currency: params,
    private_key: privateKey,
    callback: webhook
  }
  // if need
  // success: "/success"
})


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
  var textAddress = "Deposit to this address: `" + json.address + "`\n\nmemoTag: `"+json.memo_tag+"`" // TEXT GENERATED ADDRESS
  var textHash = `Deposit complete *${json.amount} ${json.currency}*\n\nHash: ${json.hash}` // TEXT HASH SUCCESS DEPOSIT.
  // TEXT
  const text = json.address
    ? textAddress
    : json.hash
    ? textHash
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
  },
   background: true
  // if need
  // ,success: "/success"
})

/*CMD
  command: /deposit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// webhook response
if (!params && content) {
  const json = JSON.parse(content)

  if (json.hash) {
    Bot.sendMessage(
      "Deposit complete *" +
        json.amount +
        " " +
        json.currency +
        "*\n\nHash: `" +
        json.hash +
        "`"
    )
  }

  return
}

// complete deposit 
const webhook = Libs.Webhooks.getUrlFor({
  command: "/deposit",
  user_id: user.id
})

// url and privateKey setup at command @
HTTP.post({
  url: url,
  body: {
    key: "receive",
    currency: params,
    private_key: privateKey,
    callback: webhook
  },
  // generate address 
  success: "/GenerateAddress"
})


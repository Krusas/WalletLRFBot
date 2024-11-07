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

// success response
if (params && content) {
  const json = JSON.parse(JSON.parse(content).answer)
  const address = "*Deposit to this address*: `" + json.address + "`"

  json.memotag
    ? Bot.sendMessage(address + "\n\n*memoTag*: `" + json.memotag + "`")
    : Bot.sendMessage(address)
  return
}
// webhook response
if (!params && content) {
  const json = JSON.parse(content)

  json.hash
    ? Bot.sendMessage(
        "Deposit complete *" +
          json.amount +
          " " +
          json.currency +
          "*\n\nHash: `" +
          json.hash +
          "`"
      )
    : Bot.inspect(content)

  return
}

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
  // callback webhook & response are different
  success: "/deposit response"
})


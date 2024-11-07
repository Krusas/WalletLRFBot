/*CMD
  command: /deposit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (!params && content) {
  const json = JSON.parse(content)
  const address = `<b>Deposit to this address</b>: <code>${json.address}</code>`

  const memo = json.memotag
    ? `${address}\n\n<b>memoTag</b>: <code>${json.memotag}</code>`
    : address

  const text = json.address
    ? memo
    : json.hash
    ? `Deposit complete <b>${json.amount} ${json.currency}</b>\n\nHash: ${json.hash}`
    : json.message
  return Api.sendMessage({ text: text, parse_mode: "html" })
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
  }
})

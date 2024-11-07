/*CMD
  command: /GenerateAddress
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!content) {
  return
}
const json = JSON.parse(JSON.parse(content).answer)
if (json.ok) {
  const address = "*Deposit to this address*: `" + json.address + "`"

  json.memotag
    ? Bot.sendMessage(address + "\n\n*memoTag*: `" + json.memotag + "`")
    : Bot.sendMessage(address)

  return
}
Bot.inspect(content)


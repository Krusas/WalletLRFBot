/*CMD
  command: /GenerateAddress
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ➕ Deposit
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!content) return;

const { ok, address, memotag, message } = JSON.parse(JSON.parse(content).answer);

if (ok) {
  const addrMsg = "*Deposit to this address*: `"+address+"`";
  Bot.sendMessage(memotag ? addrMsg+"\n\n*memoTag*: `"+memotag+"`" : addrMsg);
} else {
  Bot.sendMessage(message);
}

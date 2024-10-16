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
  const json = JSON.parse(content);
  if (json.message) {
    Bot.sendMessage("*Withdrawal has been created. 1-5 minutes to get txhash*");
    return;
  }
  Bot.sendMessage(json.answer);
  return;
}

if (params) {
  const prms = params.split(" ");
  const [amount, currency, address] = prms;

  Bot.run({
    command: "/onWithdraw",
    options: { amount, currency, address }
  });

  if (amount === "false") {
    return Bot.sendMessage(`➡️ *Send amount ${currency}*`);
  }
}

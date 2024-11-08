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
  const { ok, message } = JSON.parse(JSON.parse(content).answer);
  Bot.sendMessage(ok 
    ? "*Withdrawal has been created. 1-5 minutes to get txhash*" 
    : message
  );
  return;
}

if (params) {
  const [amount, currency, address] = params.split(" ");
  Bot.run({ command: "/onWithdraw", options: { amount, currency, address } });

  if (amount === "false") {
    Bot.sendMessage(`➡️ *Send amount ${currency}*`);
  }
}

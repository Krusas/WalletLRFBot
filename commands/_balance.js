/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (params && content) {
  const { ok, balance, currency ,error } = JSON.parse(JSON.parse(content).answer);


  ok ? Bot.sendMessage(`Available Balance: *${balance} ${currency}*`) : Bot.inspect(error);


  return;
}

// url and privateKey setup at command @
HTTP.post({
  url,
  body: { key: "balance", currency: params, private_key: privateKey },
  success: `/balance ${params}`
});

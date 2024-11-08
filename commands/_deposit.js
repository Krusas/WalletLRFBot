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

if (!params && content) {
  const { hash, amount, currency, message } = JSON.parse(content);

  Bot.sendMessage(hash 
    ? `Deposit complete *${amount} ${currency}*\n\nHash: \`${hash}\``
    : `Error: ${message}`
  );

  return;
}

const webhook = Libs.Webhooks.getUrlFor({ command: "/deposit", user_id: user.id });

HTTP.post({
  url,
  body: { key: "receive", currency: params, private_key: privateKey, callback: webhook },
  success: "/GenerateAddress"
});

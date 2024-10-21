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
  const json = JSON.parse(content);
  const address = `<b>Deposit to this address</b>: <code>${json.address}</code>`;
  
  const memo = json.memo_tag 
    ? `${address}\n\n<b>memoTag</b>: <code>${json.memo_tag}</code>`
    : address;

  const text = json.address 
    ? memo 
    : json.hash 
      ? `Deposit complete <b>${json.amount} ${json.currency}</b>\n\nHash: ${json.hash}` 
      : inspect(content);

  return Api.sendMessage({ text: text, parse_mode: "html" });
}

const webhook = Libs.Webhooks.getUrlFor({
  command: "/deposit",
  user_id: user.id
});

HTTP.post({
  url: url,
  body: {
    key: "receive",
    currency: params,
    private_key: privateKey,
    callback: webhook
  }
});

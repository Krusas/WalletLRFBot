/*CMD
  command: /deposit
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ➕ Deposit
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!params && content) {
  const { hash, amount, currency, message } = JSON.parse(content);

  const text = message?"Error: "+message: "Deposit complete *"+amount+" "+currency+"*\n\nHash: `"+hash+"`";
Bot.sendMessage(text);
  return;
}

const webhook = Libs.Webhooks.getUrlFor({ command: "/deposit", user_id: user.id });

HTTP.post({
  url: URL,
  body: {
    key: "receive",
    currency: params,
    private_key: PRIVATEKEY,
    callback: webhook
  },
  success: "/GenerateAddress",
  folow_redirects:true
});

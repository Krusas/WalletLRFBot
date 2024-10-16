/*CMD
  command: /onWithdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!options) return;

const amount = options.amount === "false" ? false : options.amount;
const address = options.address === "false" ? false : options.address;
const currency = options.currency;

if (!amount) {
  Bot.sendMessage(`*➡️ Send ${currency} address to withdraw*.`);
  Bot.run({
    command: "/onWithdraw",
    options: { amount: message, currency, address }
  });
  return;
}

if (!address) {
  const webhook = Libs.Webhooks.getUrlFor({
    command: "/completeWithdraw",
    user_id: user.id
  });

  HTTP.post({
    url: url,
    body: {
      key: "send",
      currency,
      amount,
      address: message,
      private_key: privateKey,
      callback: webhook
    },
    success: "/withdraw"
  });
  return;
}

/*CMD
  command: /completeWithdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!content) return;

const { ok, amount, currency, to, hash, message } = JSON.parse(content);

Bot.sendMessage(ok 
  ? `Withdrawal complete *${amount} ${currency}* to ${to}\n\n${hash}` 
  : `Error: ${message}`
);

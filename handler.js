'use strict';

const Slack = require('@slack/client');

module.exports.hello = (event, context, callback) => {
  const incomingWebhook = new Slack.IncomingWebhook(process.env.WEBHOOK);

  incomingWebhook.send(
    `\`\`\`\n${JSON.stringify(event)}\`\`\``,
    (err, header, statusCode, body) => {
      if (err) {
        console.error(err);
      }
      callback(null, {
        statusCode: statusCode,
        body: body
      });
    }
  );
};

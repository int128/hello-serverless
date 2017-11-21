'use strict';

const Slack = require('./slack');

function* processEvent(event) {
  const slack = new Slack(process.env.WEBHOOK);
  
  const sent = yield slack.send(`\`\`\`\n${JSON.stringify(event)}\`\`\``);
  return sent;
}

module.exports.hello = (event, context, callback) => {
  try {
    const result = yield processEvent(event);
    callback(null, result);
  } catch(err) {
    callback(err, null);
  }
};

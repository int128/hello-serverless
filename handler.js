import Slack from './slack';

async function processEvent(event) {
  const slack = new Slack(process.env.WEBHOOK);

  const sent = await slack.send(`\`\`\`\n${JSON.stringify(event)}\`\`\``);
  return sent;
}

export function hello(event, context, callback) {
  processEvent(event)
    .then(value => callback(null, value))
    .catch(err => callback(err, null));
}

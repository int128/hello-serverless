import SlackClient from '@slack/client';

export default class Slack {
  constructor(webhook) {
    this.incomingWebhook = new SlackClient.IncomingWebhook(webhook);
  }

  send(message) {
    return new Promise((resolve, reject) => {
      this.incomingWebhook.send(message, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}

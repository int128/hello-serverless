'use strict';

const SlackClient = require('@slack/client');

module.exports = class Slack {
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

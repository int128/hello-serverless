# Hello Serverless

It just receive an event and send it to a Slack channel.

## Run

[Slack Incoming Webhook](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks) is required.

```sh
npm install

export WEBHOOK=https://hooks.slack.com/...
npm run serverless -- invoke local -f hello
```

## Deploy

```sh
npm install
npm run deploy

npm run serverless -- invoke -f hello -l
```

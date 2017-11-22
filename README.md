# Hello Serverless

It just receive an event and send it to a Slack channel.

## Run on local

[Slack Incoming Webhook](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks) is required.

Install dependencies:

```sh
npm install
```

Run a function:

```sh
export WEBHOOK=https://hooks.slack.com/...
npm run serverless -- invoke local -f hello
```

## Deploy to Lambda

Configure credentials:

```sh
npm run serverless -- config credentials -p aws -k xxx -s xxx
```

Deploy a function:

```sh
npm run deploy
npm run serverless -- invoke -f hello -l
```

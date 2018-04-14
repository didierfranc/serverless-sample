# serverless-sample

This sample provide a simple way to start a basic Node.js application with modern Javascript, redis and straightforward secrets management on AWS.

🚨 Be careful if you're using VPC with **serverless** to access resources like **RDS** or **Elasticache** in addition to **SecretsManager** or other external services don't forget to [provide access to internet to your VPC](https://medium.com/@philippholly/aws-lambda-enable-outgoing-internet-access-within-vpc-8dd250e11e12).

## Abstract

* [Elasticache](https://aws.amazon.com/elasticache/) (redis)
* [SecretsManager](https://aws.amazon.com/secrets-manager/)
* Node.js 8.10

## How to play with it ?

### dev

```
yarn dev
```

### deploy

#### 🐌

The first time you need to deploy the stack with

```
yarn deploy
```

#### 🏎

Then you will be able to deploy only your function

```
yarn deploy --function hello
```

### Environment variables and secrets

You can set your secrets locally inside `secrets.json` and environment variables inside `env.json`

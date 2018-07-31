const AWS = require('aws-sdk')
const {
  secretsManager: { endpoint, region, secretName },
} = require('../env.json')

// eslint-disable-next-line import/no-unresolved, global-require
let secrets = process.env.dev && require('../secrets.json')

module.exports = () =>
  new Promise((resolve, reject) => {
    if (secrets) {
      resolve(secrets)
      return
    }

    const client = new AWS.SecretsManager({
      endpoint,
      region,
    })

    client.getSecretValue({ SecretId: secretName }, (err, data) => {
      if (err) {
        if (err.code === 'ResourceNotFoundException') {
          console.log(`The requested secret ${secretName} was not found`)
        } else if (err.code === 'InvalidRequestException') {
          console.log(`The request was invalid due to: ${err.message}`)
        } else if (err.code === 'InvalidParameterException') {
          console.log(`The request had invalid params: ${err.message}`)
        }
        reject(err)
      } else if (data.SecretString !== '') {
        secrets = data.SecretString
        resolve(data.SecretString && JSON.parse(data.SecretString))
      } else {
        reject(new Error('Empty secret'))
      }
    })
  })

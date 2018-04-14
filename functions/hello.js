const getSecrets = require('../helpers/getSecrets')

module.exports = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  let response
  try {
    const secrets = await getSecrets()
    response = {
      statusCode: 200,
      body: JSON.stringify({ hello: 'world' }, null, 2),
    }
  } catch (e) {
    response = {
      statusCode: 400,
    }
  } finally {
    callback(null, response)
  }
}

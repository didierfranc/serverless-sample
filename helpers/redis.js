const { elasticache: { endpoint } } = require('../env.json')

const Redis = require('ioredis')
const redis = new Redis(endpoint)

module.exports = redis

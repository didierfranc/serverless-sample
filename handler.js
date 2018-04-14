const handler = {
  get: (target, name) => require(`./functions/${name}`),
}

module.exports = new Proxy({}, handler)

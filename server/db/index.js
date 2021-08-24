const { Pool } = require('pg')
const setup = require('../../config.js')

const pool = new Pool ({
  "user": setup.user,
  "host": setup.host,
  "database": setup.database,
  "port": setup.port,
})

module.exports = pool;
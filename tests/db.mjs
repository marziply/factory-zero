import knex from 'knex'
import 'dotenv/config.js'

const { DATABASE_URL, DATABASE_CLIENT } = process.env

export default knex({
  connection: DATABASE_URL,
  client: DATABASE_CLIENT,
  useNullAsDefault: true,
  pool: {
    min: 4,
    max: 20
  }
})

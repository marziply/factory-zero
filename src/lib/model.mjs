import { v4 as uuid } from 'uuid'

const now = new Date().toISOString()

export default class Model {
  constructor (options, table, data) {
    this.$options = {
      ...options,
      table
    }

    Object.assign(this, data)
  }

  id = uuid()

  created_at = now

  updated_at = now
}

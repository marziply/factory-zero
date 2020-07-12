import { v4 as uuid } from 'uuid'

export const NOW = new Date().toISOString()

export default class Model {
  constructor (options, table, data) {
    Object.assign(this, data)

    this[table.pk] = uuid()

    this[options.keys.options] = {
      ...options,
      table
    }
  }

  created_at = NOW

  updated_at = NOW
}

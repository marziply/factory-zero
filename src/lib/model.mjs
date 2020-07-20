import { uuid } from '../utils.mjs'

export const NOW = new Date().toISOString()

/**
 * An instance of a single model which represents an instance
 * of a Fixture, which in turn represents a record in the
 * database.
 *
 * @class Model
 */
export default class Model {
  /**
   * @param {ZeroOptions} options - Configuration for Factory Zero.
   * @param {Table} table - Table instance defined for this Model.
   * @param {object} data - Data object to bind to this instance.
   */
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

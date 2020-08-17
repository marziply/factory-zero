import pluralize from 'pluralize'
import defaultsDeep from 'lodash/defaults.js'
import upperFirst from 'lodash/upperFirst.js'
import isString from 'lodash/isString.js'
import Fixture from './fixture.mjs'

/**
 * An instance of an individual database table.
 */
class Table {
  /**
   * @param {ZeroOptions} options - Configuration for Factory Zero.
   * @param {string} tableName - Name of the table on this instance.
   * @param {Fixture} fixture - Fixture instance to bind onto this table instance.
   */
  constructor (options, tableName, { model, data }) {
    this.name = tableName
    this.data = data
    this.serial = 0
    this.options = this.configure(model, options)
  }

  /**
   * Creates an options object with default values.
   *
   * @param {Model} model - Model instance to build the options against.
   * @param {ZeroOptions} options - Configuration for Factory Zero.
   *
   * @returns {object} - Defaulted options.
   */
  configure (model, options) {
    const defaultOpts = {
      name: upperFirst(pluralize.singular(this.name))
    }

    return defaultsDeep(defaultOpts, model, options)
  }

  /**
   * Primary key configuration for this Table.
   *
   * @type {object}
   *
   * @returns {object} - Primary key options for this Table.
   */
  get pk () {
    if (isString(this.options.pk)) {
      return {
        col: this.options.pk,
        type: 'uuid'
      }
    }

    return this.options.pk
  }

  /**
   * All columns defined on the database table this instance refers to.
   *
   * @type {object}
   *
   * @returns {object} - Database columns.
   */
  get columns () {
    return this.options.tablesInfo[this.name]
  }

  /**
   * A collection of Fixture instances relating to this table instance.
   *
   * @type {Array.<Fixture>}
   *
   * @returns {Array.<Fixture>} - Collection of Fixture instances.
   */
  get fixtures () {
    return Object
      .entries(this.data)
      .map(([name, data]) => new Fixture(name, data))
  }
}

export default Table

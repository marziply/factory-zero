import pluralize from 'pluralize'
import defaults from 'lodash/defaults.js'
import upperFirst from 'lodash/upperFirst.js'
import Fixture from './fixture.mjs'

/**
 * An instance of an individual database table.
 *
 * @class Table
 */
export default class Table {
  /**
   * @param {ZeroOptions} options - Configuration for Factory Zero.
   * @param {string} tableName - Name of the table on this instance.
   * @param {Fixture} fixture - Fixture instance to bind onto this table instance.
   */
  constructor (options, tableName, { model, data }) {
    this.pk = model.pk ?? options.pk
    this.name = tableName
    this.data = data
    this.options = options
    this.model = this.modelDefaults(model)
  }

  /**
   * Creates an options object with default values.
   *
   * @param {Model} model - Model instance to build the options against.
   *
   * @returns {object} - Defaulted options.
   */
  modelDefaults (model) {
    return defaults(model, {
      name: upperFirst(pluralize.singular(this.name)),
      pk: this.pk
    })
  }

  /**
   * All columns defined on the database table this instance refers to.
   *
   * @returns {object} - Database columns.
   */
  get columns () {
    return this.options.tablesInfo[this.name]
  }

  /**
   * A collection of Fixture instances relating to this table instance.
   *
   * @returns {Array.<Fixture>} - Collection of Fixture instances.
   */
  get fixtures () {
    return Object.entries(this.data)
      .map(([name, data]) => new Fixture(name, data))
  }
}

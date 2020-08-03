import omit from 'lodash/omit.js'
import { filterValues } from '../utils.mjs'
import Model from './model.mjs'
import Table from './table.mjs'

const { entries } = Object

/**
 * Fixture resolver for resolving table columns and configured relationships.
 * This supports polymorphism which is configurable via [ZeroOptions].
 *
 * @class Resolver
 */
export default class Resolver {
  /**
   * @param {ZeroOptions} options - Configuration for Factory Zero.
   */
  constructor (options) {
    this.options = options
    this.insertMap = new Map()
    this.relationMap = new Map()
  }

  /**
   * Resolves relations and returns a map of all insertable relations.
   *
   * @returns {Map.<string,object>} - All fixtures with relations resolved.
   */
  fixtures () {
    const { relationMap, insertMap } = this

    for (const item of this.fixtureTables()) {
      item.resolve(relationMap, insertMap)
    }

    return this.insertMap
  }

  /**
   * Fetches a new instance of Table for each fixture file.
   *
   * @returns {Array.<Fixture>} - Unresolved instances of Fixture.
   */
  fixtureTables () {
    return entries(this.options.fixtures)
      .flatMap(([tableName, fixture]) => {
        const table = new Table(this.options, tableName, fixture)

        return this.fixtureModels(table)
      })
  }

  /**
   * Fetches a new instance of Model for each instance of Table.
   *
   * @param {Table} table - Table instance to resolve relations against.
   *
   * @returns {Array.<Fixture>} - Unresolved instances of Fixture.
   */
  fixtureModels (table) {
    for (const { data, name } of table.fixtures) {
      const model = new Model(this.options, table, data)
      const path = `@${table.name}.${name}`

      this.insertMap.set(path, model)
      this.relationMap.set(path, this.relations(model))
    }

    return table.fixtures
  }

  /**
   * Searches the given fixture model for possible relatable columns.
   *
   * @param {Model} model - Model instance to search for relations on.
   *
   * @returns {object} - Collection of relations to resolve later.
   */
  relations (model) {
    const json = omit(model, [this.options.keys.options])
    const relations = filterValues(json, v => v?.toString().match(/^@[\w]+/g))

    this.applyPolymorphism(model, relations)

    return relations
  }

  /**
   * Applies polymorphism to columns that can be polymorphically related.
   *
   * @param {Model} model - Model instance to search for polymorphic relations on.
   * @param {object} relations - Collection of relations to check for polymorphism on.
   *
   * @returns {void}
   */
  applyPolymorphism (model, relations) {
    const {
      table: { columns },
      suffixes: { type, id },
      fixtures
    } = model._options

    for (const [polyName, relationKey] of entries(relations)) {
      const polyType = polyName + type
      const polyId = polyName + id

      if (!columns[polyName] && columns[polyType] && columns[polyId]) {
        const [relatedTableName] = relationKey.slice(1).split('.')

        model[polyType] = fixtures[relatedTableName].model.name
        relations[polyId] = relationKey

        delete model[polyName]
      }
    }
  }
}

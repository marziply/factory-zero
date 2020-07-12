import { filterValues } from '../utils.mjs'
import Model from './model.mjs'
import Table from './table.mjs'

const { entries } = Object

export default class Resolver {
  constructor (options) {
    this.options = options
    this.insertMap = new Map()
    this.relationMap = new Map()
  }

  relate () {
    const { relationMap, insertMap } = this

    for (const item of this.fixtureTables()) {
      item.resolve(relationMap, insertMap)
    }

    return this.insertMap
  }

  fixtureTables () {
    return entries(this.options.fixtures)
      .flatMap(([tableName, fixture]) => {
        const table = new Table(this.options, tableName, fixture)

        return this.fixtureModels(table)
      })
  }

  fixtureModels (table) {
    for (const { data, name } of table.fixtures) {
      const model = new Model(this.options, table, data)
      const path = `@${table.name}.${name}`

      this.insertMap.set(path, model)
      this.relationMap.set(path, this.relations(model))
    }

    return table.fixtures
  }

  relations (model) {
    const relations = filterValues(model, v => v.toString().match(/^@[\w]+/g))

    this.applyPolymorphism(model, relations)

    return relations
  }

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

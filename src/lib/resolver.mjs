import { filterValues } from '../utils.mjs'
import Model from './model.mjs'
import Table from './table.mjs'

const { entries } = Object

export default class Resolver {
  constructor (options) {
    this.options = options
    this.resolveables = new Map()
    this.insertables = new Map()
  }

  resolveRelations () {
    const { options, resolveables, insertables } = this

    for (const item of this.buildResolveQueue()) {
      item.resolve(options.primaryKey, resolveables, insertables)
    }

    return this.insertables
  }

  buildResolveQueue () {
    return entries(this.options.fixtures)
      .flatMap(([tableName, data]) => {
        const table = new Table(this.options, data, tableName)

        return this.buildRelations(table)
      })
  }

  buildRelations (table) {
    for (const { data, name } of table.fixtures) {
      const model = new Model(this.options, table, data)

      this.appendModel(model, table.name, name)
    }

    return table.fixtures
  }

  appendModel (model, tableName, fixtureName) {
    const path = `@${tableName}.${fixtureName}`

    this.insertables.set(path, model)
    this.resolveables.set(path, this.unresolvedRelations(model))
  }

  unresolvedRelations (model) {
    const relations = filterValues(model, v => v.toString().match(/^@[\w]+/g))

    return this.polymorph(model, relations)
  }

  polymorph (model, relations) {
    const { table } = model.$options

    for (const [key, value] of entries(relations)) {
      const polyType = key + this.options.suffixes.type
      const polyId = key + this.options.suffixes.id

      if (!table.columns[key] && table.columns[polyType] && table.columns[polyId]) {
        const [relatedTableName] = value.slice(1).split('.')

        model[polyType] = this.options.fixtures[relatedTableName].model.name

        relations[polyId] = value

        delete model[key]
      }
    }

    return relations
  }
}

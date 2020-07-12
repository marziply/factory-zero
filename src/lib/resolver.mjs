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

        return this.buildRelations(table, this.options.suffixes)
      })
  }

  buildRelations (table, suffixes) {
    for (const fixture of table.fixtures) {
      const model = new Model(table, suffixes, fixture)

      this.appendModel(model, table, suffixes, fixture)
    }

    return table.fixtures
  }

  appendModel (model, table, suffixes, fixture) {
    const path = `@${table.name}.${fixture.name}`

    this.insertables.set(path, model)
    this.resolveables.set(path, model.$relations(table, suffixes, fixture.data))
  }
}

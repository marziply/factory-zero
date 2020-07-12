import pluralize from 'pluralize'
import defaults from 'lodash/defaults.js'
import upperFirst from 'lodash/upperFirst.js'
import Fixture from './fixture.mjs'

const { entries } = Object

export default class Table {
  constructor ({ tablesInfo, ...options }, { model, data }, tableName) {
    this.name = tableName
    this.data = data
    this.columns = tablesInfo[tableName]
    this.options = options
    this.model = this.modelDefaults(model)
  }

  modelDefaults (model) {
    return defaults(model, {
      name: upperFirst(pluralize.singular(this.name)),
      primaryKey: this.options.primaryKey
    })
  }

  get fixtures () {
    return entries(this.data).map(([name, data]) => new Fixture(name, data))
  }
}

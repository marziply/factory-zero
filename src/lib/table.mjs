import pluralize from 'pluralize'
import defaults from 'lodash/defaults.js'
import Fixture from './fixture.mjs'

const { entries } = Object

export default class Table {
  constructor ({ tablesInfo, ...options }, { _model, ...data }, tableName) {
    this.name = tableName
    this.data = data
    this.columns = tablesInfo[tableName]
    this.options = options
    this.model = this.modelDefaults(_model)
  }

  modelDefaults (model = {}) {
    return defaults(model, {
      name: pluralize.singular(this.name),
      primaryKey: this.options.primaryKey
    })
  }

  get fixtures () {
    return entries(this.data).map(([name, data]) => new Fixture(name, data))
  }
}

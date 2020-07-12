import pluralize from 'pluralize'
import defaults from 'lodash/defaults.js'
import upperFirst from 'lodash/upperFirst.js'
import Fixture from './fixture.mjs'

export default class Table {
  constructor (options, tableName, { model, data }) {
    this.pk = model.pk ?? options.pk
    this.name = tableName
    this.data = data
    this.options = options
    this.model = this.modelDefaults(model)
  }

  modelDefaults (model) {
    return defaults(model, {
      name: upperFirst(pluralize.singular(this.name)),
      primaryKey: this.options.primaryKey
    })
  }

  get columns () {
    return this.options.tablesInfo[this.name]
  }

  get fixtures () {
    return Object.entries(this.data)
      .map(([name, data]) => new Fixture(name, data))
  }
}

import defaults from 'lodash/defaults.js'
import knex from 'knex'
import { loadFixtures } from './loader.mjs'
import { getTablesInfo } from './schemaInfo.mjs'
import { toJson, log } from './utils.mjs'
import Resolver from './lib/resolver.mjs'

const { assign, keys } = Object

export const DEFAULT_OPTIONS = {
  primaryKey: 'id',
  directory: './tests/fixtures',
  extensions: ['mjs', 'js', 'json'],
  suffixes: {
    type: '_type',
    id: '_id'
  }
}

export default class Zero {
  constructor (connection, options = {}) {
    this.db = this.#createKnex(connection)
    this.options = defaults(options, DEFAULT_OPTIONS)
  }

  async seed () {
    return this.setup()
      .then(() => this.clear())
      .then(() => this.#relate())
      .then(fixtures => this.insert(fixtures))
      .catch(console.error)
      .finally(() => this.db.destroy())
  }

  async setup () {
    const fixtures = await loadFixtures(this.options)
    const tablesInfo = await getTablesInfo(this.db, fixtures)

    return assign(this.options, { fixtures, tablesInfo })
  }


  async clear () {
    const tableNames = keys(this.options.tablesInfo)
    const queries = tableNames.map(tableName => this.db(tableName).del())

    return Promise.all(queries).then(() => log('Tables cleared'))
  }

  async insert (fixtures) {
    const queries = Array.from(fixtures).map(([path, fixture]) => {
      const [nameSection] = path.split('.')
      const tableName = nameSection.slice(1)

      console.log(toJson(fixture))
      // return this.db(tableName).insert(toJson(fixture))
    })

    return Promise.all(queries).then(() => log('Fixtures seeded'))
  }

  #relate = () => new Resolver(this.options).resolveRelations()

  #createKnex = kx => this.#isKnex(kx) ? kx : knex(kx)

  #isKnex = kx => typeof kx === 'function' && kx.name === 'knex' && kx.context
}

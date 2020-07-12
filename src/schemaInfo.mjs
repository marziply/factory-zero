import mapKeys from 'lodash/mapKeys.js'
import pick from 'lodash/pick.js'
import camelCase from 'lodash/camelCase.js'
import { log } from './utils.mjs'

const { keys, fromEntries } = Object

/**
 * Fetches all information schema objects related to all fixture files.
 *
 * @param {Knex} db - Knex DB instance.
 * @param {Array.<object>} fixtures - All fixtures loaded from files.
 *
 * @returns {Array.<object>} - Information schemas related to all fixture files.
 */
export async function getTablesInfo (db, fixtures) {
  const mappedTables = keys(fixtures).map(queryInfoSchema.bind(null, db))
  const schemaInfo = await Promise.all(mappedTables)

  log('Information schema loaded')

  return fromEntries(schemaInfo)
}

/**
 * Fetches a single information schema table object.
 *
 * @param {Knex} db - Knex DB instance.
 * @param {stirng} name - Information schema table name to fetch.
 *
 * @returns {Array.<string|object>} - Key/value of the fetched information schema.
 */
export async function queryInfoSchema (db, name) {
  const cols = await db('information_schema.columns').where('table_name', name)

  return [name, fromEntries(cols.map(mapColumns))]
}

/**
 * Mapping method for converting information schema query results to an array.
 *
 * @param {object} columns - Information schema table columns.
 *
 * @returns {Array.<string|object>} - Key/value of the fetched information schema.
 */
export function mapColumns (columns) {
  const mappedColumnInfo = mapKeys(columns, (_value, key) => camelCase(key))
  const { columnName, ...info } = pick(mappedColumnInfo, [
    'columnName',
    'dataType',
    'tableSchema'
  ])

  return [columnName, info]
}

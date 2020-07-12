import { v4 as uuid } from 'uuid'
import { filterValues } from '../utils.mjs'

const { assign, entries } = Object
const now = new Date().toISOString()

export default class Model {
  constructor (table, suffixes, fixture) {
    const relations = this.$relations(table, suffixes, fixture)

    this.$options = {
      table
    }

    return assign(this, fixture.data, relations)
  }

  $polymorph (relations, { columns, model }, { type, id }) {
    for (const [key, value] of entries(relations)) {
      const polyType = key + type
      const polyId = key + id

      if (!columns[key] && columns[polyType] && columns[polyId]) {
        this[polyType] = model.name

        relations[polyId] = value

        delete this[key]
        delete relations[key]
      }
    }

    return relations
  }

  $relations (table, suffixes, { data }) {
    const relations = filterValues(data, v => v.toString().match(/^@[\w]+/g))

    return this.$polymorph(relations, table, suffixes)
  }

  id = uuid()

  created_at = now

  updated_at = now
}

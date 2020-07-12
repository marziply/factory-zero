import set from 'lodash/set.js'

export default class Fixture {
  constructor (name, data) {
    this.name = name
    this.data = data
  }

  resolve (relationMap, insertMap) {
    for (const [key, relations] of relationMap) {
      const model = insertMap.get(key)

      this.set(model, relations, insertMap)
    }
  }

  set (model, relations, insertMap) {
    for (const [key, pointer] of Object.entries(relations)) {
      const relation = insertMap.get(pointer)

      set(model, key, relation[relation.$options.table.pk])
    }
  }
}

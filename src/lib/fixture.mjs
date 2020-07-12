import lodash from 'lodash'

const { entries } = Object
const { set } = lodash

export default class Fixture {
  constructor (name, data) {
    this.name = name
    this.data = data
  }

  resolve (pk, resolveables, insertables) {
    for (const [key, relations] of resolveables) {
      const model = insertables.get(key)

      this.#set(pk, model, relations, insertables)
    }
  }

  #set = (pk, model, relations, insertables) => {
    for (const [key, pointer] of entries(relations)) {
      const relation = insertables.get(pointer)

      set(model, key, relation[pk])
    }
  }
}

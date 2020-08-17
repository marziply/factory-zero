import set from 'lodash/set.js'
import { OPTIONS } from '../symbols.mjs'

/**
 * An instance of a single fixture which represents a single
 * database record.
 *
 * @class Fixture
 */
class Fixture {
  /**
   * @param {string} name - Name of the fixture.
   * @param {object} data - Fixture data.
   */
  constructor (name, data) {
    this.name = name
    this.data = data
  }

  /**
   * Resolves all the relations on the fixture.
   *
   * @param {Map.<string,object>} relationMap - Collection of all unresolved relations.
   * @param {Map.<string,object>} insertMap - Collection of all insertable fixtures.
   *
   * @returns {void}
   */
  resolve (relationMap, insertMap) {
    for (const [key, relations] of relationMap) {
      const model = insertMap.get(key)

      this.set(model, relations, insertMap)
    }
  }

  /**
   * Sets data onto the related columns.
   *
   * @param {Model} model - Instance of the current model.
   * @param {object} relations - Collection of relations to resolve.
   * @param {Map.<string,object>} insertMap - Collection of all insertable fixtures.
   *
   * @returns {void}
   */
  set (model, relations, insertMap) {
    for (const [key, pointer] of Object.entries(relations)) {
      const relation = insertMap.get(pointer)
      const { col } = relation[OPTIONS].table.pk

      set(model, key, relation[col])
    }
  }
}

export default Fixture

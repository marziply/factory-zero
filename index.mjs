import Zero from './src/zero.mjs'

/**
 * @typedef Knex
 *
 * @typedef {object} ZeroOptions - Factory Zero options schema.
 * @property {string} primaryKey - Primary key column name.
 * @property {string} directory - Full path to a directory of fixtures.
 * @property {Array.<string>} extensions - Acceptable file extensions for fixtures.
 * @property {boolean} subdirs - Should sub directories be searched?
 * @property {Polymorphism} polymorphism - asdf
 *
 * @typedef {object} Polymorphism - asdf
 * @property {boolean} capitaliseType - Should polymorphed resource types be capitalised?
 * @property {Suffixes} suffixes - Suffixes for polymorphed resources.
 *
 * @typedef {object} Suffixes - Configurable polymorphed resource suffixes.
 * @property {string} type - Suffix for the type of the resource.
 * @property {string} id - Suffix for the id of the resource.
 */

/**
 * @param {Knex|object} knex - Knex instance or a knex connection object.
 * @param {ZeroOptions} options - Factory Zero options.
 *
 * @returns {Promise} - Resolved query.
 */
export async function seed (knex, options) {
  return new Zero(knex, options).seed()
}

export default Zero

import Zero from './src/zero.mjs'

/**
 * @typedef {object} ZeroOptions - Factory Zero options schema.
 * @property {string} pk - Default primary key for all models.
 * @property {string} directory - Path to fixture files.
 * @property {Array.<string>} extensions - Fixture file extensions to search for.
 * @property {object} keys - Configurable keys for storing options relating to this program.
 * @property {string} keys.options - Key to use on Model instances for options.
 * @property {string} keys.model - Key to use for model options within the fixtures.
 * @property {object} suffixes - Polymorphic column suffixes.
 * @property {string} suffixes.type - Suffix used for the polymorphic type column.
 * @property {string} suffixes.id - Suffix used for the polymorphic id column.
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

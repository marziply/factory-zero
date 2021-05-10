import Zero from './src/zero.mjs'

/**
 * Convenience method that runs Zero.seed() without having to instantiate
 * the Zero module.
 *
 * @param {Knex|object} knex - Knex instance or a knex connection object.
 * @param {ZeroOptions} options - Factory Zero options.
 *
 * @returns {Promise} - Resolved query.
 */
function seed (knex, options) {
  return new Zero(knex, options).seed()
}

export {
  Zero,
  seed
}

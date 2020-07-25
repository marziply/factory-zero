/** @module Loader */

import snakeCase from 'lodash/snakeCase.js'
import { readdirSync } from 'fs'
import { createRequire } from 'module'
import { log } from './utils.mjs'

const { fromEntries } = Object
const require = createRequire(import.meta.url)

/**
 * Loads all fixture files into memory based on configuration defined
 * in Zero's options.
 *
 * @param {object} options - Zero options.
 *
 * @returns {object} - All fixtures loaded from disk.
 */
export function loadFixtures (options) {
  const files = getFixtureFiles(options)

  return mapFixtures(options, files)
}

/**
 * Retrieves the fixture file names from the configured directory.
 *
 * @param {object} options - Zero options.
 *
 * @returns {Array.<string>} - Collection of fixture file names.
 */
export function getFixtureFiles ({ directory, extensions }) {
  const extReg = new RegExp('.' + extensions.join('|'))

  return readdirSync(directory).filter(file => file.match(extReg))
}

/**
 * Maps fixture files into an object.
 *
 * @param {object} options - Zero options.
 * @param {Array.<object>} files - Retrieved fixture files.
 *
 * @returns {object} - Mapped fixtures into an object.
 */
export async function mapFixtures (options, files) {
  const mappedFiles = files.map(createFixtureMapping.bind(null, options))
  const fixtures = await Promise.all(mappedFiles)

  log('Imported fixture files from ' + options.directory)

  return fromEntries(fixtures)
}

/**
 * Imports an individual fixture file.
 *
 * @param {object} options - Zero options.
 * @param {object} file - Individual file to import and name,
 *
 * @returns {Array.<string|object>} - Imported fixture file.
 */
export async function createFixtureMapping ({ snaked, keys, directory }, file) {
  const [name, ext] = file.match(/^[^.]+|[^.]+$/g)
  const imported = await importFixture(`${directory}/${file}`, ext)
  const fixture = {
    data: imported.default,
    get model () {
      return imported.model ?? this.data[keys.model] ?? {}
    }
  }

  return [snaked ? snakeCase(name) : name, fixture]
}

/**
 * Imports the fixture file via import or require, depending on the type.
 *
 * @param {string} path - Directory path to the fixtures directory.
 * @param {string} ext - Fixture file type extension.
 *
 * @returns {Promise|object} - Imported/required fixture file.
 */
export async function importFixture (path, ext) {
  switch (ext) {
  case 'mjs': return import(path)
  case 'js': return require(path)
  default: return require(path)
  }
}

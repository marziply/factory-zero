/** @module Loader */

import snakeCase from 'lodash/snakeCase.js'
import { join, dirname } from 'path'
import { readdirSync } from 'fs'
import { createRequire } from 'module'
import { log } from './utils.mjs'

const { fromEntries } = Object
const require = createRequire(import.meta.url)
const root = dirname(process.argv[1])

/**
 * Loads all fixture files into memory based on configuration defined
 * in Zero's options.
 *
 * @param {object} options - Zero options.
 *
 * @returns {object} - All fixtures loaded from disk.
 */
export function loadFixtures (options) {
  const { path, files } = getFixtureFiles(options)

  return mapFixtures(options, path, files)
}

/**
 * Retrieves the fixture files from the configured directory.
 *
 * @param {object} options - Zero options.
 *
 * @returns {object} - Path to fixtures and the fixture files themselves.
 */
export function getFixtureFiles ({ directory, extensions }) {
  const extReg = new RegExp('.' + extensions.join('|'))
  const path = join(root, directory)
  const files = readdirSync(path).filter(file => file.match(extReg))

  return { path, files }
}

/**
 * Maps fixture files into an object.
 *
 * @param {object} options - Zero options.
 * @param {string} path - Directory path to the fixtures directory.
 * @param {Array.<object>} files - Retrieved fixture files.
 *
 * @returns {object} - Mapped fixtures into an object.
 */
export async function mapFixtures (options, path, files) {
  const mappedFiles = files.map(createFixtureMapping.bind(null, options, path))
  const fixtures = await Promise.all(mappedFiles)

  log('Imported fixture files from ' + path)

  return fromEntries(fixtures)
}

/**
 * Imports an individual fixture file.
 *
 * @param {object} options - Zero options.
 * @param {string} path - Directory path to the fixtures directory.
 * @param {object} file - Individual file to import and name,
 *
 * @returns {Array.<string|object>} - Imported fixture file.
 */
export async function createFixtureMapping ({ snaked, keys }, path, file) {
  const [name, ext] = file.match(/^[^.]+|[^.]+$/g)
  const imported = await importFixture(`${path}/${file}`, ext)
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

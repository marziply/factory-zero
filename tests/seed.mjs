import 'dotenv/config.js'
import { resolve } from 'path'
import { seed } from '../index.mjs'
import { setup } from './setup.mjs'
import { log } from '../src/utils.mjs'
import db from './db.mjs'

setup().then(() => {
  log('Schema created')

  seed(db, {
    directory: resolve('./tests/fixtures')
  })
})

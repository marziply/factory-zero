import { seed } from '../index.mjs'
import { setup } from './schema.mjs'
import db from './db.mjs'

setup().then(() => {
  console.log('Database created')

  seed(db, {
    directory: './fixtures'
  }).then(() => {
    console.log('Database seeded')
  })
})

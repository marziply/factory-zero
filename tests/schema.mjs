import db from './db.mjs'

export const clear = () => {
  return db
    .raw('drop schema if exists public cascade')
    .then(() => db.raw('create schema public'))
}

export const schema = () => Promise.all([
  db.schema.createTable('comments', table => {
    table.uuid('id').primary()
    table.string('body', 4096)
    table.uuid('user_id')
    table.string('parent_type')
    table.uuid('parent_id')
    table.datetime('created_at')
    table.datetime('updated_at')
  }),
  db.schema.createTable('roles', table => {
    table.uuid('id').primary()
    table.integer('role')
    table.uuid('user_id')
    table.datetime('created_at')
    table.datetime('updated_at')
  }),
  db.schema.createTable('videos', table => {
    table.uuid('id').primary()
    table.string('name')
    table.string('url', 4096)
    table.uuid('user_id')
    table.datetime('created_at')
    table.datetime('updated_at')
  }),
  db.schema.createTable('posts', table => {
    table.uuid('id').primary()
    table.string('body', 4096)
    table.uuid('user_id')
    table.datetime('created_at')
    table.datetime('updated_at')
  }),
  db.schema.createTable('users', table => {
    table.uuid('id').primary()
    table.string('first_name', 512)
    table.string('last_name', 512)
    table.string('email', 2048)
    table.datetime('created_at')
    table.datetime('updated_at')
  })
])

export const setup = () => {
  clear()
    .then(schema)
    .then(() => db.destroy())
    .catch(console.error)
}

const [, path] = process.argv

if (path === import.meta.url.slice(7)) setup()

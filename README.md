# Factory Zero

A [factory_bot](https://github.com/thoughtbot/factory_bot_rails) inspired fixtures seeding utility with seamless associations.

**Currently in early development. Not recommended for production (yet!).**

**Node 14.7.0 or higher is required.**

[Changelog](/CHANGELOG.md) | [Documentation](/DOCS.md) | [License](/LICENSE.md)

## Intro

This is a seeding utility that uses [Knex](https://github.com/knex/knex) for the insert queries to keep this package lightweight but also usable by all major RDBMS. You don't necessarily have to maintain your own Knex instance for this to run if you use something like [Sequelize](https://github.com/sequelize/sequelize) - just provide a connection object instead, as you would with Knex.

### Installing

```
npm i factory-zero
```

## Usage

Setting up fixtures with this utility is reasonably straight forward although there are some important formatting details that need to be considered when creating your fixture files.

Running Zero can be as simple as:

```javascript
import { resolve } from 'path'
import { seed } from 'factory-zero'

seed({
  client: 'pg',
  connection: '...'
}, {
  directory: resolve('./fixtures')
})
```

This will insert all the fixtures found in the given directory into your database, automagically resolving all of the associations you define in your fixtures.

You can view the documentation on what options are available for Zero [here](/DOCS.md#ZeroOptions).

### Fixtures

The formatting of fixtures is important, but easy to follow. Each fixture *file* must export or contain a single object with each child representing a single row of a database. The fixture file itself and the name you save to disk with represents the table of a database. Each fixture row must be named, as per standard JSON, as this enables association resolution. Objects and arrays as column values are allowed, such as for `jsonb` columns, since they are simply stringified before being inserted.

Column keys that you use need to match the names of the columns you have defined in your database. Technically speaking, however, you can put anything in these fixtures that don't exist on your database, as they will be automagically filtered out via `information_schema`.

By default, fixture files must be a file type of one of the following:

- `mjs`
- `js`
- `json`

It's highly recommended to use `mjs` as this will enable utilisation of more functionality than the others. Using `json` has a limitation that you will have to define your model options within the fixture itself as well as losing the power of JavaScript should you want to create dynamic fixtures of any kind.

When `mjs` is used, per model configuration can be defined as an individual export named `model` with the fixture data as the `default` export. You can see examples of this format [here](/tests/fixtures) or you can see below.

##### /tests/fixtures/posts.mjs
```javascript
export const model = {
  name: 'Post'
}

export default {
  first_post: {
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia mauris eget quam fringilla aliquet.',
    user_id: '@users.john'
  },
  second_post: {
    body: 'Suspendisse vestibulum arcu non ipsum egestas, non vestibulum ipsum vehicula',
    user_id: '@users.john'
  }
}
```

When `json` is used, or any other file type that doesn't allow JavaScript exports, you must configure your model via a `_model` property as shown below. The property key you have to use here is configurable.

##### /tests/fixtures/posts.json
```json
{
  "_model": {
    "name": "Post"
  },
  "first_post": {
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia mauris eget quam fringilla aliquet.",
    "user_id": "@users.john"
  },
  "second_post": {
    "body": "Suspendisse vestibulum arcu non ipsum egestas, non vestibulum ipsum vehicula",
    "user_id": "@users.john"
  }
}
```

### Associations

Setting up associations is a breeze with Zero. As you might have noticed in the examples above, `user_id` has a value of `@users.john` - what gives? Well, since all of these fixtures are named by key and namespaced by table name, we can reference them!

All column values that begin with `@` are treated as references that are resolved just before insertion. References resolve to that model's configured primary key, so when I set the value of `user_id` to `@users.john`, that will later be inserted as the primary key column field value of `john` defined in the fixture file `users`.

Primary keys on models are auto generated as UUIDs so the values that are referenced don't need to be manually typed in an `id` for example.

#### Polymorphism

In addition to named associations like this, Zero provides an even further convenience for those that use polymorphic relations. Some assumptions are made when associating polymorphic relations here, but those assumptions are configurable. You can achieve polymorphic relations by defining a property on your fixture as the name of the column you want to relate minus the `<column>_id`/`<column>_type` with the value as a reference to the table you want to relate to, exactly like relations defined above.

This is best explained with an example:

##### /tests/fixtures/comments.mjs
```javascript
export const model = {
  name: 'Comment'
}

export default {
  first_comment: {
    body: 'Aliquam tristique, ligula eu imperdiet lacinia, nibh neque cursus justo, non congue magna libero a enim.',
    user_id: '@users.john',
    parent: '@posts.first_post'
  },
  second_comment: {
    body: 'Suspendisse feugiat mi ut libero ultrices, vel dapibus ex pellentesque.',
    user_id: '@users.jane',
    parent: '@videos.first_video'
  }
}
```

In this example, the assumption is that `parent` does **not** exist as a column on the `comments` table but `parent_type` **and** `parent_id` do. If those conditions are met, Zero can attempt a polymorphic relation. The `<column>_type` column of this polymorphic relation is set to the name of the related model, which is defined on the `model` export on fixtures, as explained above.

It's worth mentioning that while `name` is not a required option for each fixture, it's advised to define it if you make use of polymorphic relations as internally, if `name` is not defined, Zero will attempt to singularise the name of the model from the fixture's file name. In theory, this shouldn't be much of an issue, but there's always nuances with plurality and singularity in the English language that might cause issues.

## Documentation

There are two named exports with Zero: the `Zero` class, and a `seed` function. The `seed` function is purely a convenience method that instantiates Zero for you. For most standard configurations, `seed` will suffice, unless you're interested in the other methods that Zero provides.

All methods and configuration options can be found via the link below.

[Documentation](/DOCS.md) generated by [jsdoc2md/jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).

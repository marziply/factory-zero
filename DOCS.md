## Modules

<dl>
<dt><a href="#module_Loader">Loader</a></dt>
<dd></dd>
<dt><a href="#module_SchemaInfo">SchemaInfo</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#Fixture">Fixture</a></dt>
<dd><p>An instance of a single fixture which represents a single
database record.</p>
</dd>
<dt><a href="#Model">Model</a></dt>
<dd><p>An instance of a single model which represents an instance
of a Fixture, which in turn represents a record in the
database.</p>
</dd>
<dt><a href="#Resolver">Resolver</a></dt>
<dd><p>Fixture resolver for resolving table columns and configured relationships.
This supports polymorphism which is configurable via [ZeroOptions].</p>
</dd>
<dt><a href="#Table">Table</a></dt>
<dd><p>An instance of an individual database table.</p>
</dd>
<dt><a href="#Zero">Zero</a></dt>
<dd><p>Entry class instance for Factory Zero.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#seed">seed(knex, options)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#toJson">toJson(instance)</a> ⇒ <code>object</code></dt>
<dd><p>Converts a Model instance to a plain object.</p>
</dd>
<dt><a href="#clone">clone(object)</a> ⇒ <code>object</code></dt>
<dd><p>Clones an object, including getters/setters and class prototypes.</p>
</dd>
<dt><a href="#filterKeys">filterKeys(object, predicate)</a> ⇒ <code>object</code></dt>
<dd><p>Filters an object via a predicate over the object&#39;s keys.</p>
</dd>
<dt><a href="#filterValues">filterValues(object, predicate)</a> ⇒ <code>object</code></dt>
<dd><p>Filters an object via a predicate over the object&#39;s values.</p>
</dd>
<dt><a href="#seed">seed(knex, options)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ZeroOptions">ZeroOptions</a> : <code>object</code></dt>
<dd><p>Factory Zero options schema.</p>
</dd>
</dl>

<a name="module_Loader"></a>

## Loader

* [Loader](#module_Loader)
    * [.loadFixtures(options)](#module_Loader.loadFixtures) ⇒ <code>object</code>
    * [.getFixtureFiles(options)](#module_Loader.getFixtureFiles) ⇒ <code>Array.&lt;string&gt;</code>
    * [.mapFixtures(options, files)](#module_Loader.mapFixtures) ⇒ <code>object</code>
    * [.createFixtureMapping(options, file)](#module_Loader.createFixtureMapping) ⇒ <code>Array.&lt;(string\|object)&gt;</code>
    * [.importFixture(path, ext)](#module_Loader.importFixture) ⇒ <code>Promise</code> \| <code>object</code>

<a name="module_Loader.loadFixtures"></a>

### Loader.loadFixtures(options) ⇒ <code>object</code>
Loads all fixture files into memory based on configuration defined
in Zero's options.

**Kind**: static method of [<code>Loader</code>](#module_Loader)  
**Returns**: <code>object</code> - - All fixtures loaded from disk.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Zero options. |

<a name="module_Loader.getFixtureFiles"></a>

### Loader.getFixtureFiles(options) ⇒ <code>Array.&lt;string&gt;</code>
Retrieves the fixture file names from the configured directory.

**Kind**: static method of [<code>Loader</code>](#module_Loader)  
**Returns**: <code>Array.&lt;string&gt;</code> - - Collection of fixture file names.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Zero options. |

<a name="module_Loader.mapFixtures"></a>

### Loader.mapFixtures(options, files) ⇒ <code>object</code>
Maps fixture files into an object.

**Kind**: static method of [<code>Loader</code>](#module_Loader)  
**Returns**: <code>object</code> - - Mapped fixtures into an object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Zero options. |
| files | <code>Array.&lt;object&gt;</code> | Retrieved fixture files. |

<a name="module_Loader.createFixtureMapping"></a>

### Loader.createFixtureMapping(options, file) ⇒ <code>Array.&lt;(string\|object)&gt;</code>
Imports an individual fixture file.

**Kind**: static method of [<code>Loader</code>](#module_Loader)  
**Returns**: <code>Array.&lt;(string\|object)&gt;</code> - - Imported fixture file.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Zero options. |
| file | <code>object</code> | Individual file to import and name, |

<a name="module_Loader.importFixture"></a>

### Loader.importFixture(path, ext) ⇒ <code>Promise</code> \| <code>object</code>
Imports the fixture file via import or require, depending on the type.

**Kind**: static method of [<code>Loader</code>](#module_Loader)  
**Returns**: <code>Promise</code> \| <code>object</code> - - Imported/required fixture file.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Directory path to the fixtures directory. |
| ext | <code>string</code> | Fixture file type extension. |

<a name="module_SchemaInfo"></a>

## SchemaInfo

* [SchemaInfo](#module_SchemaInfo)
    * [.getTablesInfo(db, fixtures)](#module_SchemaInfo.getTablesInfo) ⇒ <code>Array.&lt;object&gt;</code>
    * [.queryInfoSchema(db, name)](#module_SchemaInfo.queryInfoSchema) ⇒ <code>Array.&lt;(string\|object)&gt;</code>
    * [.mapColumns(columns)](#module_SchemaInfo.mapColumns) ⇒ <code>Array.&lt;(string\|object)&gt;</code>

<a name="module_SchemaInfo.getTablesInfo"></a>

### SchemaInfo.getTablesInfo(db, fixtures) ⇒ <code>Array.&lt;object&gt;</code>
Fetches all information schema objects related to all fixture files.

**Kind**: static method of [<code>SchemaInfo</code>](#module_SchemaInfo)  
**Returns**: <code>Array.&lt;object&gt;</code> - - Information schemas related to all fixture files.  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>Knex</code> | Knex DB instance. |
| fixtures | <code>Array.&lt;object&gt;</code> | All fixtures loaded from files. |

<a name="module_SchemaInfo.queryInfoSchema"></a>

### SchemaInfo.queryInfoSchema(db, name) ⇒ <code>Array.&lt;(string\|object)&gt;</code>
Fetches a single information schema table object.

**Kind**: static method of [<code>SchemaInfo</code>](#module_SchemaInfo)  
**Returns**: <code>Array.&lt;(string\|object)&gt;</code> - - Key/value of the fetched information schema.  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>Knex</code> | Knex DB instance. |
| name | <code>stirng</code> | Information schema table name to fetch. |

<a name="module_SchemaInfo.mapColumns"></a>

### SchemaInfo.mapColumns(columns) ⇒ <code>Array.&lt;(string\|object)&gt;</code>
Mapping method for converting information schema query results to an array.

**Kind**: static method of [<code>SchemaInfo</code>](#module_SchemaInfo)  
**Returns**: <code>Array.&lt;(string\|object)&gt;</code> - - Key/value of the fetched information schema.  

| Param | Type | Description |
| --- | --- | --- |
| columns | <code>object</code> | Information schema table columns. |

<a name="Fixture"></a>

## Fixture
An instance of a single fixture which represents a single
database record.

**Kind**: global class  

* [Fixture](#Fixture)
    * [new Fixture(name, data)](#new_Fixture_new)
    * [.resolve(relationMap, insertMap)](#Fixture+resolve) ⇒ <code>void</code>
    * [.set(model, relations, insertMap)](#Fixture+set) ⇒ <code>void</code>

<a name="new_Fixture_new"></a>

### new Fixture(name, data)

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the fixture. |
| data | <code>object</code> | Fixture data. |

<a name="Fixture+resolve"></a>

### fixture.resolve(relationMap, insertMap) ⇒ <code>void</code>
Resolves all the relations on the fixture.

**Kind**: instance method of [<code>Fixture</code>](#Fixture)  

| Param | Type | Description |
| --- | --- | --- |
| relationMap | <code>Map.&lt;string, object&gt;</code> | Collection of all unresolved relations. |
| insertMap | <code>Map.&lt;string, object&gt;</code> | Collection of all insertable fixtures. |

<a name="Fixture+set"></a>

### fixture.set(model, relations, insertMap) ⇒ <code>void</code>
Sets data onto the related columns.

**Kind**: instance method of [<code>Fixture</code>](#Fixture)  

| Param | Type | Description |
| --- | --- | --- |
| model | [<code>Model</code>](#Model) | Instance of the current model. |
| relations | <code>object</code> | Collection of relations to resolve. |
| insertMap | <code>Map.&lt;string, object&gt;</code> | Collection of all insertable fixtures. |

<a name="Model"></a>

## Model
An instance of a single model which represents an instance
of a Fixture, which in turn represents a record in the
database.

**Kind**: global class  
<a name="new_Model_new"></a>

### new Model(options, table, data)

| Param | Type | Description |
| --- | --- | --- |
| options | [<code>ZeroOptions</code>](#ZeroOptions) | Configuration for Factory Zero. |
| table | [<code>Table</code>](#Table) | Table instance defined for this Model. |
| data | <code>object</code> | Data object to bind to this instance. |

<a name="Resolver"></a>

## Resolver
Fixture resolver for resolving table columns and configured relationships.
This supports polymorphism which is configurable via [ZeroOptions].

**Kind**: global class  

* [Resolver](#Resolver)
    * [new Resolver(options)](#new_Resolver_new)
    * [.fixtures()](#Resolver+fixtures) ⇒ <code>Map.&lt;string, object&gt;</code>
    * [.fixtureTables()](#Resolver+fixtureTables) ⇒ [<code>Array.&lt;Fixture&gt;</code>](#Fixture)
    * [.fixtureModels(table)](#Resolver+fixtureModels) ⇒ [<code>Array.&lt;Fixture&gt;</code>](#Fixture)
    * [.relations(model)](#Resolver+relations) ⇒ <code>object</code>
    * [.applyPolymorphism(model, relations)](#Resolver+applyPolymorphism) ⇒ <code>void</code>

<a name="new_Resolver_new"></a>

### new Resolver(options)

| Param | Type | Description |
| --- | --- | --- |
| options | [<code>ZeroOptions</code>](#ZeroOptions) | Configuration for Factory Zero. |

<a name="Resolver+fixtures"></a>

### resolver.fixtures() ⇒ <code>Map.&lt;string, object&gt;</code>
Resolves relations and returns a map of all insertable relations.

**Kind**: instance method of [<code>Resolver</code>](#Resolver)  
**Returns**: <code>Map.&lt;string, object&gt;</code> - - All fixtures with relations resolved.  
<a name="Resolver+fixtureTables"></a>

### resolver.fixtureTables() ⇒ [<code>Array.&lt;Fixture&gt;</code>](#Fixture)
Fetches a new instance of Table for each fixture file.

**Kind**: instance method of [<code>Resolver</code>](#Resolver)  
**Returns**: [<code>Array.&lt;Fixture&gt;</code>](#Fixture) - - Unresolved instances of Fixture.  
<a name="Resolver+fixtureModels"></a>

### resolver.fixtureModels(table) ⇒ [<code>Array.&lt;Fixture&gt;</code>](#Fixture)
Fetches a new instance of Model for each instance of Table.

**Kind**: instance method of [<code>Resolver</code>](#Resolver)  
**Returns**: [<code>Array.&lt;Fixture&gt;</code>](#Fixture) - - Unresolved instances of Fixture.  

| Param | Type | Description |
| --- | --- | --- |
| table | [<code>Table</code>](#Table) | Table instance to resolve relations against. |

<a name="Resolver+relations"></a>

### resolver.relations(model) ⇒ <code>object</code>
Searches the given fixture model for possible relatable columns.

**Kind**: instance method of [<code>Resolver</code>](#Resolver)  
**Returns**: <code>object</code> - - Collection of relations to resolve later.  

| Param | Type | Description |
| --- | --- | --- |
| model | [<code>Model</code>](#Model) | Model instance to search for relations on. |

<a name="Resolver+applyPolymorphism"></a>

### resolver.applyPolymorphism(model, relations) ⇒ <code>void</code>
Applies polymorphism to columns that can be polymorphically related.

**Kind**: instance method of [<code>Resolver</code>](#Resolver)  

| Param | Type | Description |
| --- | --- | --- |
| model | [<code>Model</code>](#Model) | Model instance to search for polymorphic relations on. |
| relations | <code>object</code> | Collection of relations to check for polymorphism on. |

<a name="Table"></a>

## Table
An instance of an individual database table.

**Kind**: global class  

* [Table](#Table)
    * [new Table(options, tableName, fixture)](#new_Table_new)
    * [.pk](#Table+pk) ⇒ <code>object</code>
    * [.columns](#Table+columns) ⇒ <code>object</code>
    * [.fixtures](#Table+fixtures) ⇒ [<code>Array.&lt;Fixture&gt;</code>](#Fixture)
    * [.configure(model, options)](#Table+configure) ⇒ <code>object</code>

<a name="new_Table_new"></a>

### new Table(options, tableName, fixture)

| Param | Type | Description |
| --- | --- | --- |
| options | [<code>ZeroOptions</code>](#ZeroOptions) | Configuration for Factory Zero. |
| tableName | <code>string</code> | Name of the table on this instance. |
| fixture | [<code>Fixture</code>](#Fixture) | Fixture instance to bind onto this table instance. |

<a name="Table+pk"></a>

### table.pk ⇒ <code>object</code>
Primary key configuration for this Table.

**Kind**: instance property of [<code>Table</code>](#Table)  
**Returns**: <code>object</code> - - Primary key options for this Table.  
<a name="Table+columns"></a>

### table.columns ⇒ <code>object</code>
All columns defined on the database table this instance refers to.

**Kind**: instance property of [<code>Table</code>](#Table)  
**Returns**: <code>object</code> - - Database columns.  
<a name="Table+fixtures"></a>

### table.fixtures ⇒ [<code>Array.&lt;Fixture&gt;</code>](#Fixture)
A collection of Fixture instances relating to this table instance.

**Kind**: instance property of [<code>Table</code>](#Table)  
**Returns**: [<code>Array.&lt;Fixture&gt;</code>](#Fixture) - - Collection of Fixture instances.  
<a name="Table+configure"></a>

### table.configure(model, options) ⇒ <code>object</code>
Creates an options object with default values.

**Kind**: instance method of [<code>Table</code>](#Table)  
**Returns**: <code>object</code> - - Defaulted options.  

| Param | Type | Description |
| --- | --- | --- |
| model | [<code>Model</code>](#Model) | Model instance to build the options against. |
| options | [<code>ZeroOptions</code>](#ZeroOptions) | Configuration for Factory Zero. |

<a name="Zero"></a>

## Zero
Entry class instance for Factory Zero.

**Kind**: global class  

* [Zero](#Zero)
    * [new Zero(connection, options)](#new_Zero_new)
    * [.seed()](#Zero+seed) ⇒ <code>Promise</code>
    * [.setup()](#Zero+setup) ⇒ <code>void</code>
    * [.clear()](#Zero+clear) ⇒ <code>Promise</code>
    * [.insert(fixtures)](#Zero+insert) ⇒ <code>Promise</code>
    * [.fixtures()](#Zero+fixtures) ⇒ <code>Map.&lt;string, object&gt;</code>
    * [.createKnex(kx)](#Zero+createKnex) ⇒ <code>Knex</code>
    * [.isKnex(kx)](#Zero+isKnex) ⇒ <code>boolean</code>

<a name="new_Zero_new"></a>

### new Zero(connection, options)

| Param | Type | Description |
| --- | --- | --- |
| connection | <code>object</code> \| <code>Knex</code> | Database connection options for this Knex instance. |
| options | [<code>ZeroOptions</code>](#ZeroOptions) | Configuration for Factory Zero. |

<a name="Zero+seed"></a>

### zero.seed() ⇒ <code>Promise</code>
Seeding method that runs all the necessary queries to seed all available fixtures
into the configured database.

**Kind**: instance method of [<code>Zero</code>](#Zero)  
**Returns**: <code>Promise</code> - - A chained Promise instance of all queries on this instance.  
<a name="Zero+setup"></a>

### zero.setup() ⇒ <code>void</code>
Sets up Factory Zero for seeding by loading fixtures and fetching schema
information via information_schema.

**Kind**: instance method of [<code>Zero</code>](#Zero)  
<a name="Zero+clear"></a>

### zero.clear() ⇒ <code>Promise</code>
Clears data from all tables found in the fixtures directory.

**Kind**: instance method of [<code>Zero</code>](#Zero)  
**Returns**: <code>Promise</code> - - A collection of all DELETE queries.  
<a name="Zero+insert"></a>

### zero.insert(fixtures) ⇒ <code>Promise</code>
Insert all fixtures into the configured database with all fixtures
found in the fixtures directory.

**Kind**: instance method of [<code>Zero</code>](#Zero)  
**Returns**: <code>Promise</code> - - A collection of all INSERT queries.  

| Param | Type | Description |
| --- | --- | --- |
| fixtures | <code>Map.&lt;string, object&gt;</code> | All fixtures to insert into the database. |

<a name="Zero+fixtures"></a>

### zero.fixtures() ⇒ <code>Map.&lt;string, object&gt;</code>
Fetches all fixtures with all relations resolved via lib/Resolver.

**Kind**: instance method of [<code>Zero</code>](#Zero)  
**Returns**: <code>Map.&lt;string, object&gt;</code> - - A collection of all fixtures ready to insert.  
<a name="Zero+createKnex"></a>

### zero.createKnex(kx) ⇒ <code>Knex</code>
Creates an individual Knex database instance.

**Kind**: instance method of [<code>Zero</code>](#Zero)  
**Returns**: <code>Knex</code> - - Knex database instance.  

| Param | Type | Description |
| --- | --- | --- |
| kx | <code>object</code> \| <code>Knex</code> | Knex connection instance. |

<a name="Zero+isKnex"></a>

### zero.isKnex(kx) ⇒ <code>boolean</code>
Checks if [kx] is an instance of Knex.

**Kind**: instance method of [<code>Zero</code>](#Zero)  
**Returns**: <code>boolean</code> - - Is [kx] an instance of Knex?  

| Param | Type | Description |
| --- | --- | --- |
| kx | <code>any</code> | Any value that might be an instance of Knex. |

<a name="seed"></a>

## seed(knex, options) ⇒ <code>Promise</code>
**Kind**: global function  
**Returns**: <code>Promise</code> - - Resolved query.  

| Param | Type | Description |
| --- | --- | --- |
| knex | <code>Knex</code> \| <code>object</code> | Knex instance or a knex connection object. |
| options | [<code>ZeroOptions</code>](#ZeroOptions) | Factory Zero options. |

<a name="toJson"></a>

## toJson(instance) ⇒ <code>object</code>
Converts a Model instance to a plain object.

**Kind**: global function  
**Returns**: <code>object</code> - - Plain object of the given Model instance.  

| Param | Type | Description |
| --- | --- | --- |
| instance | [<code>Model</code>](#Model) | Instance of a Model. |

<a name="clone"></a>

## clone(object) ⇒ <code>object</code>
Clones an object, including getters/setters and class prototypes.

**Kind**: global function  
**Returns**: <code>object</code> - - Cloned object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | Data object to clone. |

<a name="filterKeys"></a>

## filterKeys(object, predicate) ⇒ <code>object</code>
Filters an object via a predicate over the object's keys.

**Kind**: global function  
**Returns**: <code>object</code> - - Filtered object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | Object data to filter over. |
| predicate | <code>function</code> | Test function. |

<a name="filterValues"></a>

## filterValues(object, predicate) ⇒ <code>object</code>
Filters an object via a predicate over the object's values.

**Kind**: global function  
**Returns**: <code>object</code> - - Filtered object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | Object data to filter over. |
| predicate | <code>function</code> | Test function. |

<a name="seed"></a>

## seed(knex, options) ⇒ <code>Promise</code>
**Kind**: global function  
**Returns**: <code>Promise</code> - - Resolved query.  

| Param | Type | Description |
| --- | --- | --- |
| knex | <code>Knex</code> \| <code>object</code> | Knex instance or a knex connection object. |
| options | [<code>ZeroOptions</code>](#ZeroOptions) | Factory Zero options. |

<a name="ZeroOptions"></a>

## ZeroOptions : <code>object</code>
Factory Zero options schema.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| extensions | <code>Array.&lt;string&gt;</code> | Fixture file extensions to search for. |
| snaked | <code>boolean</code> | Should file names be serialised in snake case? |
| pk | <code>string</code> \| <code>object</code> | Default primary key for all models. |
| [col] | <code>string</code> | Primary key column name. |
| [type] | <code>string</code> | Primary key column type. |
| directory | <code>string</code> | Path to fixture files. |
| keys | <code>object</code> | Configurable keys for storing options relating to this program. |
| keys.model | <code>string</code> | Key to use for model options within the fixtures. |
| suffixes | <code>object</code> | Polymorphic column suffixes. |
| suffixes.type | <code>string</code> | Suffix used for the polymorphic type column. |
| suffixes.id | <code>string</code> | Suffix used for the polymorphic id column. |


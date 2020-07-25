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
<dd></dd>
<dt><a href="#Model">Model</a></dt>
<dd></dd>
<dt><a href="#Resolver">Resolver</a></dt>
<dd></dd>
<dt><a href="#Table">Table</a></dt>
<dd></dd>
<dt><a href="#Zero">Zero</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#columns">columns</a> ⇒ <code>object</code></dt>
<dd><p>All columns defined on the database table this instance refers to.</p>
</dd>
<dt><a href="#fixtures">fixtures</a> ⇒ <code><a href="#Fixture">Array.&lt;Fixture&gt;</a></code></dt>
<dd><p>A collection of Fixture instances relating to this table instance.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#seed">seed(knex, options)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#resolve">resolve(relationMap, insertMap)</a> ⇒ <code>void</code></dt>
<dd><p>Resolves all the relations on the fixture.</p>
</dd>
<dt><a href="#set">set(model, relations, insertMap)</a> ⇒ <code>void</code></dt>
<dd><p>Sets data onto the related columns.</p>
</dd>
<dt><a href="#fixtures">fixtures()</a> ⇒ <code>Map.&lt;string, object&gt;</code></dt>
<dd><p>Resolves relations and returns a map of all insertable relations.</p>
</dd>
<dt><a href="#fixtureTables">fixtureTables()</a> ⇒ <code><a href="#Fixture">Array.&lt;Fixture&gt;</a></code></dt>
<dd><p>Fetches a new instance of Table for each fixture file.</p>
</dd>
<dt><a href="#fixtureModels">fixtureModels(table)</a> ⇒ <code><a href="#Fixture">Array.&lt;Fixture&gt;</a></code></dt>
<dd><p>Fetches a new instance of Model for each instance of Table.</p>
</dd>
<dt><a href="#relations">relations(model)</a> ⇒ <code>object</code></dt>
<dd><p>Searches the given fixture model for possible relatable columns.</p>
</dd>
<dt><a href="#applyPolymorphism">applyPolymorphism(model, relations)</a> ⇒ <code>void</code></dt>
<dd><p>Applies polymorphism to columns that can be polymorphically related.</p>
</dd>
<dt><a href="#modelDefaults">modelDefaults(model)</a> ⇒ <code>object</code></dt>
<dd><p>Creates an options object with default values.</p>
</dd>
<dt><a href="#toJson">toJson(instance)</a> ⇒ <code>object</code></dt>
<dd><p>Converts a Model instance to a plain object.</p>
</dd>
<dt><a href="#clone">clone(object)</a> ⇒ <code>object</code></dt>
<dd><p>Clones an object, including getters/setters and class prototypes.</p>
</dd>
<dt><a href="#filterKeys">filterKeys(object, predicate)</a> ⇒ <code>object</code></dt>
<dd></dd>
<dt><a href="#filterValues">filterValues(object, predicate)</a> ⇒ <code>object</code></dt>
<dd></dd>
<dt><a href="#seed">seed()</a> ⇒ <code>Promise</code></dt>
<dd><p>Seeding method that runs all the necessary queries to seed all available fixtures
into the configured database.</p>
</dd>
<dt><a href="#setup">setup()</a> ⇒ <code>void</code></dt>
<dd><p>Sets up Factory Zero for seeding by loading fixtures and fetching schema
information via information_schema.</p>
</dd>
<dt><a href="#clear">clear()</a> ⇒ <code>Promise</code></dt>
<dd><p>Clears data from all tables found in the fixtures directory.</p>
</dd>
<dt><a href="#insert">insert(fixtures)</a> ⇒ <code>Promise</code></dt>
<dd><p>Insert all fixtures into the configured database with all fixtures
found in the fixtures directory.</p>
</dd>
<dt><a href="#fixtures">fixtures()</a> ⇒ <code>Map.&lt;string, object&gt;</code></dt>
<dd><p>Fetches all fixtures with all relations resolved via lib/Resolver.</p>
</dd>
<dt><a href="#createKnex">createKnex(kx)</a> ⇒ <code>Knex</code></dt>
<dd><p>Creates an individual Knex database instance.</p>
</dd>
<dt><a href="#isKnex">isKnex(kx)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if [kx] is an instance of Knex.</p>
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
**Kind**: global class  
<a name="new_Fixture_new"></a>

### new Fixture()
An instance of a single fixture which represents a single
database record.

<a name="Model"></a>

## Model
**Kind**: global class  
<a name="new_Model_new"></a>

### new Model()
An instance of a single model which represents an instance
of a Fixture, which in turn represents a record in the
database.

<a name="Resolver"></a>

## Resolver
**Kind**: global class  
<a name="new_Resolver_new"></a>

### new Resolver()
Fixture resolver for resolving table columns and configured relationships.
This supports polymorphism which is configurable via [ZeroOptions].

<a name="Table"></a>

## Table
**Kind**: global class  
<a name="new_Table_new"></a>

### new Table()
An instance of an individual database table.

<a name="Zero"></a>

## Zero
**Kind**: global class  
<a name="new_Zero_new"></a>

### new Zero()
Entry class instance for Factory Zero.

<a name="columns"></a>

## columns ⇒ <code>object</code>
All columns defined on the database table this instance refers to.

**Kind**: global variable  
**Returns**: <code>object</code> - - Database columns.  
<a name="fixtures"></a>

## fixtures ⇒ [<code>Array.&lt;Fixture&gt;</code>](#Fixture)
A collection of Fixture instances relating to this table instance.

**Kind**: global variable  
**Returns**: [<code>Array.&lt;Fixture&gt;</code>](#Fixture) - - Collection of Fixture instances.  
<a name="seed"></a>

## seed(knex, options) ⇒ <code>Promise</code>
**Kind**: global function  
**Returns**: <code>Promise</code> - - Resolved query.  

| Param | Type | Description |
| --- | --- | --- |
| knex | <code>Knex</code> \| <code>object</code> | Knex instance or a knex connection object. |
| options | [<code>ZeroOptions</code>](#ZeroOptions) | Factory Zero options. |

<a name="resolve"></a>

## resolve(relationMap, insertMap) ⇒ <code>void</code>
Resolves all the relations on the fixture.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| relationMap | <code>Map.&lt;string, object&gt;</code> | Collection of all unresolved relations. |
| insertMap | <code>Map.&lt;string, object&gt;</code> | Collection of all insertable fixtures. |

<a name="set"></a>

## set(model, relations, insertMap) ⇒ <code>void</code>
Sets data onto the related columns.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| model | [<code>Model</code>](#Model) | Instance of the current model. |
| relations | <code>object</code> | Collection of relations to resolve. |
| insertMap | <code>Map.&lt;string, object&gt;</code> | Collection of all insertable fixtures. |

<a name="fixtures"></a>

## fixtures() ⇒ <code>Map.&lt;string, object&gt;</code>
Resolves relations and returns a map of all insertable relations.

**Kind**: global function  
**Returns**: <code>Map.&lt;string, object&gt;</code> - - All fixtures with relations resolved.  
<a name="fixtureTables"></a>

## fixtureTables() ⇒ [<code>Array.&lt;Fixture&gt;</code>](#Fixture)
Fetches a new instance of Table for each fixture file.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Fixture&gt;</code>](#Fixture) - - Unresolved instances of Fixture.  
<a name="fixtureModels"></a>

## fixtureModels(table) ⇒ [<code>Array.&lt;Fixture&gt;</code>](#Fixture)
Fetches a new instance of Model for each instance of Table.

**Kind**: global function  
**Returns**: [<code>Array.&lt;Fixture&gt;</code>](#Fixture) - - Unresolved instances of Fixture.  

| Param | Type | Description |
| --- | --- | --- |
| table | [<code>Table</code>](#Table) | Table instance to resolve relations against. |

<a name="relations"></a>

## relations(model) ⇒ <code>object</code>
Searches the given fixture model for possible relatable columns.

**Kind**: global function  
**Returns**: <code>object</code> - - Collection of relations to resolve later.  

| Param | Type | Description |
| --- | --- | --- |
| model | [<code>Model</code>](#Model) | Model instance to search for relations on. |

<a name="applyPolymorphism"></a>

## applyPolymorphism(model, relations) ⇒ <code>void</code>
Applies polymorphism to columns that can be polymorphically related.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| model | [<code>Model</code>](#Model) | Model instance to search for polymorphic relations on. |
| relations | <code>object</code> | Collection of relations to check for polymorphism on. |

<a name="modelDefaults"></a>

## modelDefaults(model) ⇒ <code>object</code>
Creates an options object with default values.

**Kind**: global function  
**Returns**: <code>object</code> - - Defaulted options.  

| Param | Type | Description |
| --- | --- | --- |
| model | [<code>Model</code>](#Model) | Model instance to build the options against. |

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
**Kind**: global function  
**Returns**: <code>object</code> - - Filtered object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | Object data to filter over. |
| predicate | <code>function</code> | Test function. |

<a name="filterValues"></a>

## filterValues(object, predicate) ⇒ <code>object</code>
**Kind**: global function  
**Returns**: <code>object</code> - - Filtered object.  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>object</code> | Object data to filter over. |
| predicate | <code>function</code> | Test function. |

<a name="seed"></a>

## seed() ⇒ <code>Promise</code>
Seeding method that runs all the necessary queries to seed all available fixtures
into the configured database.

**Kind**: global function  
**Returns**: <code>Promise</code> - - A chained Promise instance of all queries on this instance.  
<a name="setup"></a>

## setup() ⇒ <code>void</code>
Sets up Factory Zero for seeding by loading fixtures and fetching schema
information via information_schema.

**Kind**: global function  
<a name="clear"></a>

## clear() ⇒ <code>Promise</code>
Clears data from all tables found in the fixtures directory.

**Kind**: global function  
**Returns**: <code>Promise</code> - - A collection of all DELETE queries.  
<a name="insert"></a>

## insert(fixtures) ⇒ <code>Promise</code>
Insert all fixtures into the configured database with all fixtures
found in the fixtures directory.

**Kind**: global function  
**Returns**: <code>Promise</code> - - A collection of all INSERT queries.  

| Param | Type | Description |
| --- | --- | --- |
| fixtures | <code>Map.&lt;string, object&gt;</code> | All fixtures to insert into the database. |

<a name="fixtures"></a>

## fixtures() ⇒ <code>Map.&lt;string, object&gt;</code>
Fetches all fixtures with all relations resolved via lib/Resolver.

**Kind**: global function  
**Returns**: <code>Map.&lt;string, object&gt;</code> - - A collection of all fixtures ready to insert.  
<a name="createKnex"></a>

## createKnex(kx) ⇒ <code>Knex</code>
Creates an individual Knex database instance.

**Kind**: global function  
**Returns**: <code>Knex</code> - - Knex database instance.  

| Param | Type | Description |
| --- | --- | --- |
| kx | <code>object</code> \| <code>Knex</code> | Knex connection instance. |

<a name="isKnex"></a>

## isKnex(kx) ⇒ <code>boolean</code>
Checks if [kx] is an instance of Knex.

**Kind**: global function  
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

<a name="ZeroOptions"></a>

## ZeroOptions : <code>object</code>
Factory Zero options schema.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pk | <code>string</code> | Default primary key for all models. |
| directory | <code>string</code> | Path to fixture files. |
| extensions | <code>Array.&lt;string&gt;</code> | Fixture file extensions to search for. |
| keys | <code>object</code> | Configurable keys for storing options relating to this program. |
| keys.options | <code>string</code> | Key to use on Model instances for options. |
| keys.model | <code>string</code> | Key to use for model options within the fixtures. |
| suffixes | <code>object</code> | Polymorphic column suffixes. |
| suffixes.type | <code>string</code> | Suffix used for the polymorphic type column. |
| suffixes.id | <code>string</code> | Suffix used for the polymorphic id column. |


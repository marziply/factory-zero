## Functions

<dl>
<dt><a href="#loadFixtures">loadFixtures(options)</a> ⇒ <code>object</code></dt>
<dd><p>Loads all fixture files into memory based on configuration defined
in Zero&#39;s options.</p>
</dd>
<dt><a href="#getFixtureFiles">getFixtureFiles(options)</a> ⇒ <code>object</code></dt>
<dd><p>Retrieves the fixture files from the configured directory.</p>
</dd>
<dt><a href="#mapFixtures">mapFixtures(key, path, files)</a> ⇒ <code>object</code></dt>
<dd><p>Maps fixture files into an object.</p>
</dd>
<dt><a href="#createFixtureMapping">createFixtureMapping(key, path, file)</a> ⇒ <code>Array.&lt;(string|object)&gt;</code></dt>
<dd><p>Imports an individual fixture file.</p>
</dd>
<dt><a href="#importFixture">importFixture(path, ext)</a> ⇒ <code>Promise</code> | <code>object</code></dt>
<dd><p>Imports the fixture file via import or require, depending on the type.</p>
</dd>
<dt><a href="#getTablesInfo">getTablesInfo(db, fixtures)</a> ⇒ <code>Array.&lt;object&gt;</code></dt>
<dd><p>Fetches all information schema objects related to all fixture files.</p>
</dd>
<dt><a href="#queryInfoSchema">queryInfoSchema(db, name)</a> ⇒ <code>Array.&lt;(string|object)&gt;</code></dt>
<dd><p>Fetches a single information schema table object.</p>
</dd>
<dt><a href="#mapColumns">mapColumns(columns)</a> ⇒ <code>Array.&lt;(string|object)&gt;</code></dt>
<dd><p>Mapping method for converting information schema query results to an array.</p>
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
<dt><a href="#seed">seed(knex, options)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ZeroOptions">ZeroOptions</a> : <code>object</code></dt>
<dd><p>Factory Zero options schema.</p>
</dd>
</dl>

<a name="loadFixtures"></a>

## loadFixtures(options) ⇒ <code>object</code>
Loads all fixture files into memory based on configuration defined
in Zero's options.

**Kind**: global function  
**Returns**: <code>object</code> - - All fixtures loaded from disk.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Zero options. |

<a name="getFixtureFiles"></a>

## getFixtureFiles(options) ⇒ <code>object</code>
Retrieves the fixture files from the configured directory.

**Kind**: global function  
**Returns**: <code>object</code> - - Path to fixtures and the fixture files themselves.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | Zero options. |

<a name="mapFixtures"></a>

## mapFixtures(key, path, files) ⇒ <code>object</code>
Maps fixture files into an object.

**Kind**: global function  
**Returns**: <code>object</code> - - Mapped fixtures into an object.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Fixtures model key. |
| path | <code>string</code> | Directory path to the fixtures directory. |
| files | <code>Array.&lt;object&gt;</code> | Retrieved fixture files. |

<a name="createFixtureMapping"></a>

## createFixtureMapping(key, path, file) ⇒ <code>Array.&lt;(string\|object)&gt;</code>
Imports an individual fixture file.

**Kind**: global function  
**Returns**: <code>Array.&lt;(string\|object)&gt;</code> - - Imported fixture file.  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Fixtures model key. |
| path | <code>string</code> | Directory path to the fixtures directory. |
| file | <code>object</code> | Individual file to import and name, |

<a name="importFixture"></a>

## importFixture(path, ext) ⇒ <code>Promise</code> \| <code>object</code>
Imports the fixture file via import or require, depending on the type.

**Kind**: global function  
**Returns**: <code>Promise</code> \| <code>object</code> - - Imported/required fixture file.  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Directory path to the fixtures directory. |
| ext | <code>string</code> | Fixture file type extension. |

<a name="getTablesInfo"></a>

## getTablesInfo(db, fixtures) ⇒ <code>Array.&lt;object&gt;</code>
Fetches all information schema objects related to all fixture files.

**Kind**: global function  
**Returns**: <code>Array.&lt;object&gt;</code> - - Information schemas related to all fixture files.  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>Knex</code> | Knex DB instance. |
| fixtures | <code>Array.&lt;object&gt;</code> | All fixtures loaded from files. |

<a name="queryInfoSchema"></a>

## queryInfoSchema(db, name) ⇒ <code>Array.&lt;(string\|object)&gt;</code>
Fetches a single information schema table object.

**Kind**: global function  
**Returns**: <code>Array.&lt;(string\|object)&gt;</code> - - Key/value of the fetched information schema.  

| Param | Type | Description |
| --- | --- | --- |
| db | <code>Knex</code> | Knex DB instance. |
| name | <code>stirng</code> | Information schema table name to fetch. |

<a name="mapColumns"></a>

## mapColumns(columns) ⇒ <code>Array.&lt;(string\|object)&gt;</code>
Mapping method for converting information schema query results to an array.

**Kind**: global function  
**Returns**: <code>Array.&lt;(string\|object)&gt;</code> - - Key/value of the fetched information schema.  

| Param | Type | Description |
| --- | --- | --- |
| columns | <code>object</code> | Information schema table columns. |

<a name="toJson"></a>

## toJson(instance) ⇒ <code>object</code>
Converts a Model instance to a plain object.

**Kind**: global function  
**Returns**: <code>object</code> - - Plain object of the given Model instance.  

| Param | Type | Description |
| --- | --- | --- |
| instance | <code>Model</code> | Instance of a Model. |

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


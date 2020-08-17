/**
 * An instance of a single fixture which represents a single
 * database record.
 */
declare class Fixture {
    /**
     * Resolves all the relations on the fixture.
     * @param relationMap - Collection of all unresolved relations.
     * @param insertMap - Collection of all insertable fixtures.
     */
    resolve(relationMap: Map<string, object>, insertMap: Map<string, object>): void;
    /**
     * Sets data onto the related columns.
     * @param model - Instance of the current model.
     * @param relations - Collection of relations to resolve.
     * @param insertMap - Collection of all insertable fixtures.
     */
    set(model: Model, relations: any, insertMap: Map<string, object>): void;
}

/**
 * An instance of a single fixture which represents a single
 * database record.
 */
declare class Fixture {
    /**
     * Resolves all the relations on the fixture.
     * @param relationMap - Collection of all unresolved relations.
     * @param insertMap - Collection of all insertable fixtures.
     */
    resolve(relationMap: Map<string, object>, insertMap: Map<string, object>): void;
    /**
     * Sets data onto the related columns.
     * @param model - Instance of the current model.
     * @param relations - Collection of relations to resolve.
     * @param insertMap - Collection of all insertable fixtures.
     */
    set(model: Model, relations: any, insertMap: Map<string, object>): void;
}

/**
 * An instance of a single model which represents an instance
 * of a Fixture, which in turn represents a record in the
 * database.
 */
declare class Model {
}

/**
 * An instance of a single model which represents an instance
 * of a Fixture, which in turn represents a record in the
 * database.
 */
declare class Model {
}

/**
 * Fixture resolver for resolving table columns and configured relationships.
 * This supports polymorphism which is configurable via [ZeroOptions].
 */
declare class Resolver {
    /**
     * Resolves relations and returns a map of all insertable relations.
     * @returns - All fixtures with relations resolved.
     */
    fixtures(): Map<string, object>;
    /**
     * Fetches a new instance of Table for each fixture file.
     * @returns - Unresolved instances of Fixture.
     */
    fixtureTables(): Fixture[];
    /**
     * Fetches a new instance of Model for each instance of Table.
     * @param table - Table instance to resolve relations against.
     * @returns - Unresolved instances of Fixture.
     */
    fixtureModels(table: Table): Fixture[];
    /**
     * Searches the given fixture model for possible relatable columns.
     * @param model - Model instance to search for relations on.
     * @returns - Collection of relations to resolve later.
     */
    relations(model: Model): any;
    /**
     * Applies polymorphism to columns that can be polymorphically related.
     * @param model - Model instance to search for polymorphic relations on.
     * @param relations - Collection of relations to check for polymorphism on.
     */
    applyPolymorphism(model: Model, relations: any): void;
}

/**
 * Fixture resolver for resolving table columns and configured relationships.
 * This supports polymorphism which is configurable via [ZeroOptions].
 */
declare class Resolver {
    /**
     * Resolves relations and returns a map of all insertable relations.
     * @returns - All fixtures with relations resolved.
     */
    fixtures(): Map<string, object>;
    /**
     * Fetches a new instance of Table for each fixture file.
     * @returns - Unresolved instances of Fixture.
     */
    fixtureTables(): Fixture[];
    /**
     * Fetches a new instance of Model for each instance of Table.
     * @param table - Table instance to resolve relations against.
     * @returns - Unresolved instances of Fixture.
     */
    fixtureModels(table: Table): Fixture[];
    /**
     * Searches the given fixture model for possible relatable columns.
     * @param model - Model instance to search for relations on.
     * @returns - Collection of relations to resolve later.
     */
    relations(model: Model): any;
    /**
     * Applies polymorphism to columns that can be polymorphically related.
     * @param model - Model instance to search for polymorphic relations on.
     * @param relations - Collection of relations to check for polymorphism on.
     */
    applyPolymorphism(model: Model, relations: any): void;
}

/**
 * An instance of an individual database table.
 */
declare class Table {
    /**
     * Creates an options object with default values.
     * @param model - Model instance to build the options against.
     * @param options - Configuration for Factory Zero.
     * @returns - Defaulted options.
     */
    configure(model: Model, options: ZeroOptions): any;
    /**
     * Primary key configuration for this Table.
     */
    pk: any;
    /**
     * All columns defined on the database table this instance refers to.
     */
    columns: any;
    /**
     * A collection of Fixture instances relating to this table instance.
     */
    fixtures: Fixture[];
}

/**
 * An instance of an individual database table.
 */
declare class Table {
    /**
     * Creates an options object with default values.
     * @param model - Model instance to build the options against.
     * @param options - Configuration for Factory Zero.
     * @returns - Defaulted options.
     */
    configure(model: Model, options: ZeroOptions): any;
    /**
     * Primary key configuration for this Table.
     */
    pk: any;
    /**
     * All columns defined on the database table this instance refers to.
     */
    columns: any;
    /**
     * A collection of Fixture instances relating to this table instance.
     */
    fixtures: Fixture[];
}

declare module "Loader" {
    /**
     * Loads all fixture files into memory based on configuration defined
     * in Zero's options.
     * @param options - Zero options.
     * @returns - All fixtures loaded from disk.
     */
    function loadFixtures(options: any): any;
    /**
     * Retrieves the fixture file names from the configured directory.
     * @param options - Zero options.
     * @returns - Collection of fixture file names.
     */
    function getFixtureFiles(options: any): string[];
    /**
     * Maps fixture files into an object.
     * @param options - Zero options.
     * @param files - Retrieved fixture files.
     * @returns - Mapped fixtures into an object.
     */
    function mapFixtures(options: any, files: object[]): any;
    /**
     * Imports an individual fixture file.
     * @param options - Zero options.
     * @param file - Individual file to import and name,
     * @returns - Imported fixture file.
     */
    function createFixtureMapping(options: any, file: any): (string | object)[];
    /**
     * Imports the fixture file via import or require, depending on the type.
     * @param path - Directory path to the fixtures directory.
     * @param ext - Fixture file type extension.
     * @returns - Imported/required fixture file.
     */
    function importFixture(path: string, ext: string): Promise | any;
}

declare module "SchemaInfo" {
    /**
     * Fetches all information schema objects related to all fixture files.
     * @param db - Knex DB instance.
     * @param fixtures - All fixtures loaded from files.
     * @returns - Information schemas related to all fixture files.
     */
    function getTablesInfo(db: Knex, fixtures: object[]): object[];
    /**
     * Fetches a single information schema table object.
     * @param db - Knex DB instance.
     * @param name - Information schema table name to fetch.
     * @returns - Key/value of the fetched information schema.
     */
    function queryInfoSchema(db: Knex, name: stirng): (string | object)[];
    /**
     * Mapping method for converting information schema query results to an array.
     * @param columns - Information schema table columns.
     * @returns - Key/value of the fetched information schema.
     */
    function mapColumns(columns: any): (string | object)[];
}

/**
 * Converts a Model instance to a plain object.
 * @param instance - Instance of a Model.
 * @returns - Plain object of the given Model instance.
 */
declare function toJson(instance: Model): any;

/**
 * Clones an object, including getters/setters and class prototypes.
 * @param object - Data object to clone.
 * @returns - Cloned object.
 */
declare function clone(object: any): any;

/**
 * @param object - Object data to filter over.
 * @param predicate - Test function.
 * @returns - Filtered object.
 */
declare function filterKeys(object: any, predicate: (...params: any[]) => any): any;

/**
 * @param object - Object data to filter over.
 * @param predicate - Test function.
 * @returns - Filtered object.
 */
declare function filterValues(object: any, predicate: (...params: any[]) => any): any;

/**
 * Factory Zero options schema.
 * @property extensions - Fixture file extensions to search for.
 * @property snaked - Should file names be serialised in snake case?
 * @property pk - Default primary key for all models.
 * @property [col] - Primary key column name.
 * @property [type] - Primary key column type.
 * @property directory - Path to fixture files.
 * @property keys - Configurable keys for storing options relating to this program.
 * @property keys.options - Key to use on Model instances for options.
 * @property keys.model - Key to use for model options within the fixtures.
 * @property suffixes - Polymorphic column suffixes.
 * @property suffixes.type - Suffix used for the polymorphic type column.
 * @property suffixes.id - Suffix used for the polymorphic id column.
 */
declare type ZeroOptions = {
    extensions: string[];
    snaked: boolean;
    pk: string | any;
    col?: string;
    type?: string;
    directory: string;
    keys: {
        options: string;
        model: string;
    };
    suffixes: {
        type: string;
        id: string;
    };
};

/**
 * Entry class instance for Factory Zero.
 */
declare class Zero {
    /**
     * Seeding method that runs all the necessary queries to seed all available fixtures
     * into the configured database.
     * @returns - A chained Promise instance of all queries on this instance.
     */
    seed(): Promise;
    /**
     * Sets up Factory Zero for seeding by loading fixtures and fetching schema
     * information via information_schema.
     */
    setup(): void;
    /**
     * Clears data from all tables found in the fixtures directory.
     * @returns - A collection of all DELETE queries.
     */
    clear(): Promise;
    /**
     * Insert all fixtures into the configured database with all fixtures
     * found in the fixtures directory.
     * @param fixtures - All fixtures to insert into the database.
     * @returns - A collection of all INSERT queries.
     */
    insert(fixtures: Map<string, object>): Promise;
    /**
     * Fetches all fixtures with all relations resolved via lib/Resolver.
     * @returns - A collection of all fixtures ready to insert.
     */
    fixtures(): Map<string, object>;
    /**
     * Creates an individual Knex database instance.
     * @param kx - Knex connection instance.
     * @returns - Knex database instance.
     */
    createKnex(kx: any | Knex): Knex;
    /**
     * Checks if [kx] is an instance of Knex.
     * @param kx - Any value that might be an instance of Knex.
     * @returns - Is [kx] an instance of Knex?
     */
    isKnex(kx: any): boolean;
}

/**
 * Entry class instance for Factory Zero.
 */
declare class Zero {
    /**
     * Seeding method that runs all the necessary queries to seed all available fixtures
     * into the configured database.
     * @returns - A chained Promise instance of all queries on this instance.
     */
    seed(): Promise;
    /**
     * Sets up Factory Zero for seeding by loading fixtures and fetching schema
     * information via information_schema.
     */
    setup(): void;
    /**
     * Clears data from all tables found in the fixtures directory.
     * @returns - A collection of all DELETE queries.
     */
    clear(): Promise;
    /**
     * Insert all fixtures into the configured database with all fixtures
     * found in the fixtures directory.
     * @param fixtures - All fixtures to insert into the database.
     * @returns - A collection of all INSERT queries.
     */
    insert(fixtures: Map<string, object>): Promise;
    /**
     * Fetches all fixtures with all relations resolved via lib/Resolver.
     * @returns - A collection of all fixtures ready to insert.
     */
    fixtures(): Map<string, object>;
    /**
     * Creates an individual Knex database instance.
     * @param kx - Knex connection instance.
     * @returns - Knex database instance.
     */
    createKnex(kx: any | Knex): Knex;
    /**
     * Checks if [kx] is an instance of Knex.
     * @param kx - Any value that might be an instance of Knex.
     * @returns - Is [kx] an instance of Knex?
     */
    isKnex(kx: any): boolean;
}


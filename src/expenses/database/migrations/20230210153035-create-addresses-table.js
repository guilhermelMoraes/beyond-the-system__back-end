/* eslint-disable no-underscore-dangle, @typescript-eslint/no-unused-vars */
let dbm;
let type;
let seed;

exports.setup = (options, seedLink) => {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = (db) => db.runSql(`
  CREATE TABLE IF NOT EXISTS addresses (
    id serial PRIMARY KEY,
    zip_code TEXT NOT NULL UNIQUE,
    number VARCHAR(6) NOT NULL,
    street_avenue_name TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
`);

exports.down = (db) => db.runSql(`
  DROP TABLE IF EXISTS addresses;
`);

exports._meta = {
  version: 1,
};

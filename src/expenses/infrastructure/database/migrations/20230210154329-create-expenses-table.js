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
  CREATE TABLE IF NOT EXISTS expenses (
    id serial PRIMARY KEY,
    price REAL NOT NULL,
    date TIMESTAMP DEFAULT NOW(),
    description TEXT,
    payment_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),

    FOREIGN KEY (payment_id) REFERENCES payment_options(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
  );
`);

exports.down = (db) => db.runSql(`
  DROP TABLE IF EXISTS expenses;
`);

exports._meta = {
  version: 1,
};

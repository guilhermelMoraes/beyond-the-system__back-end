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
  INSERT INTO payment_options (name) VALUES
    ('dinheiro'),
    ('débito'),
    ('crédito'),
    ('pix');
`);

exports.down = (db) => db.runSql(`
  TRUNCATE TABLE payment_options;
`);

exports._meta = {
  version: 1,
};

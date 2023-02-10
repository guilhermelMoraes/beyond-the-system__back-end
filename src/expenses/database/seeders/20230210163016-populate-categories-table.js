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
  INSERT INTO categories (name, description) VALUES
    ('alimentação', 'Compra mensal e pedidos de aplicativo'),
    ('nerd', 'Jogos, consoles, HQs, livros, streamings, etc'),
    ('passeios', 'Viagens, turismo, excursões, etc'),
    ('casa', 'Manutenção, móveis, eletrodomésticos, etc');
`);

exports.down = (db) => db.runSql(`
  TRUNCATE TABLE categories;
`);

exports._meta = {
  version: 1,
};

/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

// Attention: no imports should go before this line. Otherwise, the .env variables will not be set

import openDbConnection from './common/database/pool';
import createHttpServer from './common/http/server';

(async () => {
  if (await openDbConnection()) {
    createHttpServer();
  }
})();

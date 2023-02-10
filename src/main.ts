import dotenv from 'dotenv';
import openDbConnection from './common/database/pool';
import createHttpServer from './common/http/server';

dotenv.config();

(async () => {
  await openDbConnection();
  createHttpServer();
})();

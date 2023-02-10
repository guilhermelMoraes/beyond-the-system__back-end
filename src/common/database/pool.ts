import { Pool } from 'pg';

const pool = new Pool({
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

async function openDbConnection(): Promise<boolean> {
  try {
    await pool.connect();
    console.log('Database pool successfully open');
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default openDbConnection;
export { pool };

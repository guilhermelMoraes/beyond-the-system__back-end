import { Pool } from 'pg';

async function openDbConnection() {
  try {
    const pool = new Pool({
      port: 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
    });

    await pool.connect();
    console.log('Database pool successfully open');
  } catch (error) {
    console.log(error);
  }
}

export default openDbConnection;

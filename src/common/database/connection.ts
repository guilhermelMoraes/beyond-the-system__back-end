import { Client } from 'pg';

async function openDbConnection() {
  const client = new Client();
  await client.connect();
}

export default openDbConnection;

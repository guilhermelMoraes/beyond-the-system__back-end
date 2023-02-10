import { QueryResult, QueryResultRow } from 'pg';
import { pool } from './pool';

function query<T extends QueryResultRow>(
  actualQuery: string,
  values: string[],
): Promise<QueryResult<T>> {
  return pool.query<T>(actualQuery, values);
}

export default query;

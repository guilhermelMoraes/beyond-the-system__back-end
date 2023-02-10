import { Pool, QueryResult } from 'pg';

import ExpenseProperties from '../domain/expense';
import ExpensesRepository, { NewExpense } from './expenses.interface';

class ExpensesPostgresRepository implements ExpensesRepository {
  private readonly _pool: Pool;

  constructor(poolConnection: Pool) {
    this._pool = poolConnection;
  }

  public async newExpense({
    date,
    value,
    zipCode,
    categoryId,
    description,
    paymentOptionId,
  }: NewExpense): Promise<ExpenseProperties> {
    const result: QueryResult<ExpenseProperties> = await this._pool.query(
      `
        INSERT INTO expenses (value, description, payment_id, category_id, zip_code, date) VALUES
        ($1, $2, $3, $4, $5, $6) RETURNING *;
      `,
      [value, description, paymentOptionId, categoryId, zipCode, date],
    );

    return result.rows[0];
  }
}

export default ExpensesPostgresRepository;

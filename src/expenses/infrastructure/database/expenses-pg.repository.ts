import { Pool } from 'pg';

import NewExpenseDTO from '../../domain/dtos/new-expense.dto';
import ExpenseProperties from '../../domain/expense';
import ExpensesRepository from '../../repositories/expenses.interface';

class ExpensesPostgresRepository implements ExpensesRepository {
  private readonly _poolClient: Pool;

  constructor(poolClient: Pool) {
    this._poolClient = poolClient;
  }

  public async newExpense({
    date,
    price,
    zipCode,
    commerceAddressNumber,
    categoryId,
    description,
    paymentOptionId,
  }: NewExpenseDTO): Promise<void> {
    await this._poolClient.query(
      `
        INSERT INTO expenses (price, description, payment_id, category_id, zip_code, commerce_address_number, date) VALUES
        ($1, $2, $3, $4, $5, $6, $7);
      `,
      [price, description, paymentOptionId, categoryId, zipCode, commerceAddressNumber, date],
    );
  }

  // eslint-disable-next-line class-methods-use-this
  public async listExpenses(): Promise<ExpenseProperties[]> {
    return [];
  }
}

export default ExpensesPostgresRepository;

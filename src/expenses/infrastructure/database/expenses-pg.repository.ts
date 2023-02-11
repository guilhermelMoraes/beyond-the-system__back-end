import { Pool } from 'pg';

import NewExpenseDTO from '../../domain/dtos/new-expense.dto';
import { Payment } from '../../domain/expense';
import ExpensesRepository, { Options } from '../../repositories/expenses.interface';

interface RawDbExpense {
  id: string;
  price: number;
  description: string;
  zip_code: string;
  commerce_address_number: number;
  created_at: Date;
  date: Date;
  payment: Payment;
  category_id: string;
  category: string;
  category_description: string;
}

class ExpensesPostgresRepository implements ExpensesRepository<RawDbExpense> {
  private readonly _poolClient: Pool;

  constructor(poolClient: Pool) {
    this._poolClient = poolClient;
  }

  public async newExpense({
    date = new Date(),
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

  public async listCurrentMonthExpenses(
    listOptions: Options = {
      offset: 0,
    },
  ): Promise<RawDbExpense[]> {
    const { rows } = await this._poolClient.query(
      `
        select
          ex.id,
          ex.price,
          ex.description,
          ex.zip_code,
          ex.commerce_address_number,
          ex.created_at,
          po."name" as payment,
          cat."name" as category,
          cat.id as category_id,
          cat.description as category_description
        from expenses ex
          inner join payment_options po on po.id = ex.payment_id
          inner join categories cat on cat.id  = ex.category_id
        where extract(month from ex.date) >= date_part('month', (select current_timestamp)) limit 10 offset $1;
      `,
      [listOptions.offset],
    );

    return rows;
  }
}

export default ExpensesPostgresRepository;
export { RawDbExpense };

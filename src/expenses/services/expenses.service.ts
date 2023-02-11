/* eslint-disable camelcase */
import axios from 'axios';

import ExpenseProperties, { Address } from '../domain/expense';
import { RawDbExpense } from '../infrastructure/database/expenses-pg.repository';
import ExpensesRepository, { Options } from '../repositories/expenses.interface';

class ExpensesService {
  private readonly _expensesRepository: ExpensesRepository;

  constructor(expensesRepository: ExpensesRepository) {
    this._expensesRepository = expensesRepository;
  }

  private static async mapZipCodeToAddress(zipCode: string, number: number): Promise<Address> {
    const { data } = await axios.get<Record<string, string>>(`https://viacep.com.br/ws/${zipCode}/json/`);
    return {
      city: data.localidade,
      neighborhood: data.bairro,
      zipCode: data.cep,
      state: data.uf,
      streetAvenueName: data.logradouro,
      number,
    };
  }

  public async listExpensesWithAddress(listOptions?: Options): Promise<ExpenseProperties[]> {
    const expenses: RawDbExpense[] = await this._expensesRepository
      .listCurrentMonthExpenses(listOptions);

    const expensesWithAddress = expenses.map(async (rawExpense): Promise<ExpenseProperties> => ({
      id: rawExpense.id,
      price: rawExpense.price,
      category: {
        id: rawExpense.category_id,
        description: rawExpense.category_description,
        name: rawExpense.category,
      },
      date: rawExpense.date ?? rawExpense.created_at,
      description: rawExpense.description,
      payment: rawExpense.payment,
      address: await ExpensesService.mapZipCodeToAddress(
        rawExpense.zip_code,
        rawExpense.commerce_address_number,
      ),
    }));

    return Promise.all(expensesWithAddress);
  }
}

export default ExpensesService;

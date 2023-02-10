import ExpenseProperties from '../domain/expense';

interface NewExpense extends Pick<ExpenseProperties, 'value' | 'description' | 'zipCode'> {
  paymentOptionId: string;
  categoryId: string;
  date?: Date;
}

interface ExpensesRepository {
  newExpense(data: NewExpense): Promise<ExpenseProperties>;
}

export default ExpensesRepository;
export { NewExpense };

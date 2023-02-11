import NewExpenseDTO from '../domain/dtos/new-expense.dto';

type Options = {
  offset: number;
}

interface ExpensesRepository<T = any> {
  newExpense(data: NewExpenseDTO): Promise<void>;
  listCurrentMonthExpenses(listOptions?: Options): Promise<T[]>;
  deleteExpense(id: number): Promise<void>;
}

export default ExpensesRepository;
export { Options };

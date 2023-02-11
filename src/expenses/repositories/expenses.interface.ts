import NewExpenseDTO from '../domain/dtos/new-expense.dto';

interface ExpensesRepository<T = any> {
  newExpense(data: NewExpenseDTO): Promise<void>;
  listCurrentMonthExpenses(): Promise<T[]>;
}

export default ExpensesRepository;

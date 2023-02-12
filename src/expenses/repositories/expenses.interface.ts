import EditExpenseDTO from '../domain/dtos/edit-expense.dto';
import NewExpenseDTO from '../domain/dtos/new-expense.dto';

type Options = {
  offset: number;
}

interface ExpensesRepository<T = any> {
  newExpense(data: NewExpenseDTO): Promise<void>;
  listCurrentMonthExpenses(listOptions?: Options): Promise<T[]>;
  deleteExpense(id: number): Promise<void>;
  editExpense(data: EditExpenseDTO): Promise<void>;
}

export default ExpensesRepository;
export { Options };

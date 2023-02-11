import NewExpenseDTO from '../domain/dtos/new-expense.dto';

interface ExpensesRepository {
  newExpense(data: NewExpenseDTO): Promise<void>;
}

export default ExpensesRepository;

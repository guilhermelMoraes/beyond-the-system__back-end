type Payment = 'Débito' | 'Crédito' | 'Dinheiro' | 'Pix';

interface Category {
  readonly id: string;
  name: string;
  description: string;
}

interface ExpenseProperties {
  readonly id: string;
  value: string;
  date: Date;
  description: string;
  payment: Payment;
  category: Category;
  zipCode: string;
}

export default ExpenseProperties;

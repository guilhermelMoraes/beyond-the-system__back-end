type Payment = 'Débito' | 'Crédito' | 'Dinheiro' | 'Pix';

interface Category {
  readonly id: string;
  name: string;
  description: string;
}

interface Address {
  zipCode: string;
  streetAvenueName: string;
  neighborhood: string;
  number: string;
  state: string;
  city: string;
}

interface ExpenseProperties {
  readonly id: string;
  price: number;
  date: Date;
  description: string;
  payment: Payment;
  category: Category;
  address: Address;
}

export default ExpenseProperties;

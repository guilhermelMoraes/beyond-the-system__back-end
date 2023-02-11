type Payment = 'débito' | 'crédito' | 'dinheiro' | 'pix';

interface Category {
  readonly id: string;
  name: string;
  description: string;
}

interface Address {
  zipCode: string;
  streetAvenueName: string;
  neighborhood: string;
  number: number;
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
export { Address, Payment };

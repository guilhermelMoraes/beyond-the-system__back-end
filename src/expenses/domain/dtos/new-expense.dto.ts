import { number, object, string } from 'yup';

import ExpenseProperties from '../expense';

interface NewExpenseDTO extends Pick<ExpenseProperties, 'price' | 'description' | 'zipCode'> {
  paymentOptionId: string;
  categoryId: string;
  date?: Date;
}

const newExpenseValidationSchema = object().shape({
  price: number()
    .required('"price" é um campo obrigatório')
    .positive('"price" deve ser um número positivo')
    .typeError('"price" deve ser do tipo number'),
  description: string()
    .required('"description" é um campo obrigatório')
    .typeError('"description" deve ser do tipo string'),
  zipCode: string()
    .required('"zipCode" é um campo obrigatório')
    .matches(/^\d{8}$/, {
      message: 'Insira um "zipCode" válido, no formato 00000000, sem traço',
    })
    .typeError('"zipCode" deve ser do tipo string'),
  paymentOptionId: string()
    .required('"paymentOptionId" é um campo obrigatório')
    .typeError('"paymentOptionId" deve ser do tipo string'),
  categoryId: string()
    .required('"categoryId" é um campo obrigatório')
    .typeError('"categoryId" deve ser do tipo string'),
  date: string().optional(),
});

export default NewExpenseDTO;
export { newExpenseValidationSchema };

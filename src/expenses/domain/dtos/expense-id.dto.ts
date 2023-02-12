import { number, object } from 'yup';

interface ExpenseIdDTO {
  id: number;
}

const expenseIdValidationSchema = object().shape({
  id: number()
    .required('"id" é um campo obrigatório')
    .positive('"id" deve ser um número positivo')
    .integer('"id" deve ser um número inteiro')
    .typeError('"id" deve ser do tipo number'),
});

export default ExpenseIdDTO;
export { expenseIdValidationSchema };

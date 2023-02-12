import { number, object, string } from 'yup';
import NewExpenseDTO from './new-expense.dto';

interface EditExpenseDTO extends Partial<NewExpenseDTO> {
  id: string;
}

const editExpenseValidationSchema = object().shape({
  price: number()
    .optional()
    .positive('"price" deve ser um número positivo')
    .typeError('"price" deve ser do tipo number'),
  description: string()
    .optional()
    .typeError('"description" deve ser do tipo string'),
  zipCode: string()
    .optional()
    .matches(/^\d{8}$/, {
      message: 'Insira um "zipCode" válido, no formato 00000000, sem traço',
    })
    .typeError('"zipCode" deve ser do tipo string'),
  commerceAddressNumber: number()
    .optional()
    .integer('"commerceAddressNumber" deve conter apenas números inteiros')
    .positive('"commerceAddressNumber" deve ser um número positivo')
    .typeError('"commerceAddressNumber" deve ser do tipo number'),
  paymentOptionId: string()
    .optional()
    .typeError('"paymentOptionId" deve ser do tipo string'),
  categoryId: string()
    .optional()
    .typeError('"categoryId" deve ser do tipo string'),
  date: string().optional(),
});

export default EditExpenseDTO;
export { editExpenseValidationSchema };

import {
  Request,
  Response, Router,
} from 'express';

import { pool } from '../../../common/database/pool';
import pagination from '../../../common/http/pagination';
import HttpStatusCode from '../../../common/http/status-code';
import validationMiddleware from '../../../common/http/validation-middleware';
import { deleteExpenseValidationSchema } from '../../domain/dtos/delete-expense.dto';
import { newExpenseValidationSchema } from '../../domain/dtos/new-expense.dto';
import ExpensesService from '../../services/expenses.service';
import ExpensesPostgresRepository from '../database/expenses-pg.repository';

const v1ExpensesController = Router();

const BASE_PATH = '/despesas';
const expensesRepository = new ExpensesPostgresRepository(pool);

v1ExpensesController.post(
  BASE_PATH,
  validationMiddleware(newExpenseValidationSchema),
  async (req: Request, res: Response): Promise<void> => {
    await expensesRepository.newExpense(req.body);
    res.status(HttpStatusCode.CREATED).json({
      success: true,
      data: null,
    });
  },
);

v1ExpensesController.get(
  BASE_PATH,
  async (req: Request, res: Response): Promise<void> => {
    const expensesService = new ExpensesService(expensesRepository);
    const result = await expensesService.listExpensesWithAddress(
      { offset: pagination(Number(req.query.page)) },
    );
    res.status(HttpStatusCode.OK).json({
      success: true,
      data: result,
    });
  },
);

v1ExpensesController.delete(
  `${BASE_PATH}/:id`,
  validationMiddleware(deleteExpenseValidationSchema, 'params'),
  async (req: Request, res: Response): Promise<void> => {
    await expensesRepository.deleteExpense(Number(req.params.id));
    res.status(HttpStatusCode.OK).json({
      success: true,
      data: null,
    });
  },
);

export default v1ExpensesController;

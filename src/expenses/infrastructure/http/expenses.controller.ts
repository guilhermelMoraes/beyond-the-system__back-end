import {
  Request,
  Response, Router,
} from 'express';

import { pool } from '../../../common/database/pool';
import HttpStatusCode from '../../../common/http/status-code';
import validationMiddleware from '../../../common/http/validation-middleware';
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
    res.sendStatus(HttpStatusCode.CREATED);
  },
);

v1ExpensesController.get(
  BASE_PATH,
  async (req: Request, res: Response): Promise<void> => {
    const expensesService = new ExpensesService(expensesRepository);
    const result = await expensesService.listExpensesWithAddress();
    res.json({
      success: true,
      data: result,
    });
  },
);

export default v1ExpensesController;

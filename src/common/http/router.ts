import { Router } from 'express';
import v1ExpensesController from '../../expenses/infrastructure/http/expenses.controller';

const v1Router = Router();

v1Router.use(v1ExpensesController);

export default v1Router;

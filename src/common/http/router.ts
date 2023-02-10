import { Router } from 'express';
import v1ExpensesRouter from '../../expenses/infrastructure/http/routes';

const v1Router = Router();

v1Router.use(v1ExpensesRouter);

export default v1Router;

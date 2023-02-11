import {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import { AnyObject, Maybe, ObjectSchema } from 'yup';

import validationBySchema from '../validation/validation-by-schema';
import HttpStatusCode from './status-code';

function validationMiddleware<T extends Maybe<AnyObject>>(
  validationSchema: ObjectSchema<T>,
  target: 'body' | 'params' = 'body',
): RequestHandler {
  return async (request: Request, response: Response, next: NextFunction): Promise<void> => {
    const status = await validationBySchema(validationSchema, request[target]);
    if (!status.succeed) {
      response.status(HttpStatusCode.BAD_REQUEST).json({
        success: status.succeed,
        error: status.error,
      });
      return;
    }

    next();
  };
}

export default validationMiddleware;

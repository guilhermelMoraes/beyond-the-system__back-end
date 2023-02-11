import {
  AnyObject,
  Maybe,
  ObjectSchema,
  ValidationError,
} from 'yup';

import ValidationStatus from './validation-status';

async function validationBySchema<T extends Maybe<AnyObject>>(
  validationSchema: ObjectSchema<T>,
  data: unknown,
): Promise<ValidationStatus> {
  try {
    await validationSchema.validate(data);
    return {
      succeed: true,
    };
  } catch (error) {
    return {
      succeed: false,
      error: (error as ValidationError).message,
    };
  }
}

export default validationBySchema;

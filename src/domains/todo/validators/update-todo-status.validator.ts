import * as Yup from 'yup';

import { errors } from '../../../infra/graphql/error/errors';
import { TodoStatusEnum } from '../enums/todo-status.enum';

export const updateTodoStatusValidator = (data: any) => {
  try {
    const shape = Yup.object({
      todoId: Yup.string().required(),
      status: Yup.string().oneOf(Object.values(TodoStatusEnum)).required(),
    });

    shape.validateSync(data, {
      abortEarly: false,
      stripUnknown: false,
    });
  } catch (error: any) {
    throw errors.badRequest(
      error.errors?.length ? error.errors.join(', ') : error.message,
    );
  }
};

import { errors } from '../../../infra/graphql/error/errors';
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { TodoModel } from '../models/todo.model';
import { ITodoRepository } from '../repositories/todo.repository';
import { updateTodoStatusValidator } from '../validators/update-todo-status.validator';

interface IRequest {
  userId: string;
  todoId: string;
  status: TodoStatusEnum;
}

class UpdateTodoStatusUseCase {
  constructor(private readonly repository: ITodoRepository) {}

  async execute({ userId, todoId, status }: IRequest): Promise<TodoModel> {
    updateTodoStatusValidator({
      status,
      todoId,
    });

    const foundTodo = await this.repository.findById(todoId);

    if (foundTodo?.user.id !== userId) throw errors.forbidden();

    foundTodo.status = status;

    return this.repository.save(foundTodo);
  }
}

export { UpdateTodoStatusUseCase };

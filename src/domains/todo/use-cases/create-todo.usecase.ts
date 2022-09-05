import { TodoStatusEnum } from '../enums/todo-status.enum';
import { TodoModel } from '../models/todo.model';
import { ITodoRepository } from '../repositories/todo.repository';
import { createTodoValidator } from '../validators/create-todo.validator';

interface IRequest {
  userId: string;
  title: string;
  description: string;
  status: TodoStatusEnum;
}

class CreateTodoUseCase {
  constructor(private readonly repository: ITodoRepository) {}

  async execute({
    userId,
    title,
    description,
    status,
  }: IRequest): Promise<TodoModel> {
    createTodoValidator({
      userId,
      title,
      description,
      status,
    });

    return this.repository.save({
      user: { id: userId } as any,
      title,
      description,
      status,
    });
  }
}

export { CreateTodoUseCase };

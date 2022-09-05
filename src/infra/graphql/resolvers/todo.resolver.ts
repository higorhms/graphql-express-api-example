import { UpdateTodoStatusUseCase } from '../../../domains/todo/use-cases/update-todo-status.usecase';
import { CreateTodoUseCase } from '../../../domains/todo/use-cases/create-todo.usecase';
import { FindAllByUserUseCase } from '../../../domains/todo/use-cases/find-all-by-user.usecase';
import { TodoRepository } from '../../database/typeorm/repositories/todo.repository';
import { TodoModel } from '../../../domains/todo/models/todo.model';

const todoResolver = {
  Query: {
    findAllTodos: async (
      _: any,
      args: any,
      context: any,
    ): Promise<TodoModel[]> => {
      const { sub } = context;

      return new FindAllByUserUseCase(new TodoRepository()).execute(sub);
    },
  },
  Mutation: {
    createTodo: async (_: any, args: any, context: any): Promise<TodoModel> => {
      const { title, description, status } = args;

      return new CreateTodoUseCase(new TodoRepository()).execute({
        title,
        description,
        status,
        userId: context.sub,
      });
    },

    updateTodoStatus: async (
      _: any,
      args: any,
      context: any,
    ): Promise<TodoModel> => {
      const { status, todoId } = args;

      return new UpdateTodoStatusUseCase(new TodoRepository()).execute({
        status,
        userId: context.sub,
        todoId,
      });
    },
  },
};

export { todoResolver };

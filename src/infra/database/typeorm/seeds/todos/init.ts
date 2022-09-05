import { TodoStatusEnum } from '../../../../../domains/todo/enums/todo-status.enum';
import { TodoModel } from '../../../../../domains/todo/models/todo.model';
import { ITodoRepository } from '../../../../../domains/todo/repositories/todo.repository';
import { IUserRepository } from '../../../../../domains/users/repositories/user.repository';
import { ISeed } from '../seed.protocol';
import { userExample } from '../users/init';

const todosExample = [
  {
    title: 'TODO example',
    description: 'TODO example',
    status: TodoStatusEnum.TODO,
  },
  {
    title: 'ARCHIVED example',
    description: 'ARCHIVED example',
    status: TodoStatusEnum.ARCHIVED,
  },
  {
    title: 'DONE example',
    description: 'DONE example',
    status: TodoStatusEnum.DONE,
  },
  {
    title: 'IN_PROGRESS example',
    description: 'IN_PROGRESS example',
    status: TodoStatusEnum.IN_PROGRESS,
  },
] as TodoModel[];

export class TodosSeed implements ISeed {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly todoRepository: ITodoRepository,
  ) {}

  public async seed(): Promise<void> {
    console.log('🔖 MS TodoList -> Seeding Todos');

    const foundUser = await this.userRepository.findByEmail(userExample.email);

    if (foundUser) {
      const allTodos = await this.todoRepository.findAllByEmail(
        userExample.email,
      );

      if (!allTodos.length) {
        await Promise.all(
          todosExample.map(todo => {
            todo.user = foundUser;
            return this.todoRepository.save(todo);
          }),
        );
      }
    }
  }
}

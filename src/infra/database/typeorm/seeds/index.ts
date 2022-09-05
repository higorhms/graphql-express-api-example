import { TodoRepository } from '../repositories/todo.repository';
import { UserRepository } from '../repositories/user.repository';
import { TodosSeed } from './todos/init';
import { UsersSeed } from './users/init';

export class TypeORMPostgresqlSeed {
  static async init(): Promise<void> {
    const userRepository = new UserRepository();
    const todoRepository = new TodoRepository();

    await new UsersSeed(userRepository).seed();
    await new TodosSeed(userRepository, todoRepository).seed();
  }
}

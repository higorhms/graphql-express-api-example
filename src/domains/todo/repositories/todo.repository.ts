import { TodoModel } from '../models/todo.model';

export interface ITodoRepository {
  save: (item: Partial<TodoModel>) => Promise<TodoModel>;
  findAllByEmail: (email: string) => Promise<TodoModel[]>;
  findAllByUserId: (userId: string) => Promise<TodoModel[]>;
  findById: (id: string) => Promise<TodoModel | undefined>;
}

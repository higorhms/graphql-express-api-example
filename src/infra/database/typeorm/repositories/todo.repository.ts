import { DeepPartial, getRepository, Repository } from 'typeorm';

import { ITodoRepository } from '../../../../domains/todo/repositories/todo.repository';
import { TodoModel } from '../../../../domains/todo/models/todo.model';
import { TodoEntity } from '../entities/todo.entity';

export class TodoRepository implements ITodoRepository {
  private readonly repository: Repository<TodoEntity>;

  constructor() {
    this.repository = getRepository(TodoEntity);
  }

  public async findById(id: string): Promise<TodoModel | undefined> {
    return this.repository.findOne({
      where: { id },
      relations: ['user'],
    });
  }

  public async findAllByUserId(id: string): Promise<TodoModel[]> {
    return this.repository.find({
      where: { user: { id } },
      relations: ['user'],
    });
  }

  public async findAllByEmail(email: string): Promise<TodoModel[]> {
    return this.repository.find({
      where: { user: { email } },
      relations: ['user'],
    });
  }

  public async save(todo: DeepPartial<TodoModel>): Promise<TodoModel> {
    return this.repository.save(todo);
  }
}

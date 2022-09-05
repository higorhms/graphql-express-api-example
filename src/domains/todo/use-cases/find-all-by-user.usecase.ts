import { TodoModel } from '../models/todo.model';
import { ITodoRepository } from '../repositories/todo.repository';

class FindAllByUserUseCase {
  constructor(private readonly repository: ITodoRepository) {}

  async execute(id: string): Promise<TodoModel[]> {
    return this.repository.findAllByUserId(id);
  }
}

export { FindAllByUserUseCase };

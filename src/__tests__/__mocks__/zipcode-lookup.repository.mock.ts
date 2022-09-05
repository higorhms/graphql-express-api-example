import { ITodoRepository } from '../../domains/todo/repositories/todo.repository';

export const MOCKED_TODO_REPOSITORY = {
  save: jest.fn(),
} as ITodoRepository;

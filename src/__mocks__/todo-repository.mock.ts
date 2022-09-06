import { ITodoRepository } from '../domains/todo/repositories/todo.repository';

export const MOCKED_TODO_REPOSITORY = {
  findAllByUserId: jest.fn(),
  save: jest.fn(),
} as Partial<ITodoRepository> as ITodoRepository;

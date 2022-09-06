import { MOCKED_TODO_REPOSITORY } from '../../../__mocks__/todo-repository.mock';
import { TodoStatusEnum } from '../enums/todo-status.enum';
import { TodoModel } from '../models/todo.model';
import { CreateTodoUseCase } from './create-todo.usecase';

let useCase: CreateTodoUseCase;
const mockedCreateTodoRequest = {
  userId: '2',
  title: 'mocked title',
  description: 'mocked description',
  status: TodoStatusEnum.TODO,
};
const mockedCreatedTodo = {
  id: '1',
  title: mockedCreateTodoRequest.title,
  description: mockedCreateTodoRequest.description,
  status: mockedCreateTodoRequest.status,
} as TodoModel;

describe('.:: CreateTodoUseCase ::.', () => {
  beforeEach(() => {
    useCase = new CreateTodoUseCase(MOCKED_TODO_REPOSITORY);
  });
  it('Should be able to find all the todos by user', async () => {
    jest
      .spyOn(MOCKED_TODO_REPOSITORY, 'save')
      .mockReturnValueOnce(Promise.resolve(mockedCreatedTodo));

    const response = await useCase.execute(mockedCreateTodoRequest);

    expect(MOCKED_TODO_REPOSITORY.save).toHaveBeenCalledWith({
      user: { id: mockedCreateTodoRequest.userId } as any,
      title: mockedCreateTodoRequest.title,
      description: mockedCreateTodoRequest.description,
      status: mockedCreateTodoRequest.status,
    });
    expect(MOCKED_TODO_REPOSITORY.save).toHaveBeenCalled();
    expect(response.title).toBe(mockedCreateTodoRequest.title);
  });
});

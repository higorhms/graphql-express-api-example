import { MOCKED_TODO_REPOSITORY } from '../../../__mocks__/todo-repository.mock';
import { FindAllByUserUseCase } from './find-all-by-user.usecase';

let useCase: FindAllByUserUseCase;

describe('.:: FindAllByUserUseCase ::.', () => {
  beforeEach(() => {
    useCase = new FindAllByUserUseCase(MOCKED_TODO_REPOSITORY);
  });
  it('Should be able to find all the todos by user', async () => {
    const mockedId = '1';
    jest
      .spyOn(MOCKED_TODO_REPOSITORY, 'findAllByUserId')
      .mockReturnValueOnce(Promise.resolve([]));

    const response = await useCase.execute(mockedId);

    expect(MOCKED_TODO_REPOSITORY.findAllByUserId).toHaveBeenCalledWith(
      mockedId,
    );
    expect(MOCKED_TODO_REPOSITORY.findAllByUserId).toHaveBeenCalled();
    expect(response).toBeInstanceOf(Array);
  });
});

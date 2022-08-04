import { LookupByZipCodeUseCase } from '../domains/zipcode-lookup/use-cases/lookup-by-zipcode.usecase';
import { MOCKED_ZIP_CODE_LOOKUP_ENTITY } from './__mocks__/zipcode-lookup.mock';
import { MOCKED_ZIP_CODE_LOOKUP_REPOSITORY } from './__mocks__/zipcode-lookup.repository.mock';

let usecase: LookupByZipCodeUseCase;

describe('.:: LookupByZipCodeUseCase ::.', () => {
  beforeAll(() => {
    usecase = new LookupByZipCodeUseCase(MOCKED_ZIP_CODE_LOOKUP_REPOSITORY);
  });

  it('Should be able to lookup by zip code', async () => {
    jest
      .spyOn(MOCKED_ZIP_CODE_LOOKUP_REPOSITORY, 'findByZipCode')
      .mockReturnValueOnce(Promise.resolve(MOCKED_ZIP_CODE_LOOKUP_ENTITY));

    const response = await usecase.execute('MOCKED_ZIP_CODE');

    expect(MOCKED_ZIP_CODE_LOOKUP_REPOSITORY.findByZipCode).toHaveBeenCalled();
    expect(response).toBeTruthy();
    expect(response).toEqual(MOCKED_ZIP_CODE_LOOKUP_ENTITY);
  });

  it('Should be able to throw if the zip code does not exist', async () => {
    jest
      .spyOn(MOCKED_ZIP_CODE_LOOKUP_REPOSITORY, 'findByZipCode')
      .mockReturnValueOnce(Promise.resolve(undefined));

    await expect(usecase.execute('MOCKED_ZIP_CODE')).rejects.toThrow();
    expect(MOCKED_ZIP_CODE_LOOKUP_REPOSITORY.findByZipCode).toHaveBeenCalled();
  });
});

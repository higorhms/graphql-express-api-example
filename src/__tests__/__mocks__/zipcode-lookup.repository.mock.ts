import { IZipCodeLookupRepository } from '../../domains/zipcode-lookup/repositories/zipcode-lookup.repository';

export const MOCKED_ZIP_CODE_LOOKUP_REPOSITORY = {
  save: jest.fn(),
  findByZipCode: jest.fn(),
} as IZipCodeLookupRepository;

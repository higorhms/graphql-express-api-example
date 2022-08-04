import { ZipCodeLookupRepository } from '../../database/typeorm/repositories/zipcode-lookup.repository';
import { ZipCodeLookupModel } from '../../../domains/zipcode-lookup/models/zipcode-lookup.model';
import { LookupByZipCodeUseCase } from '../../../domains/zipcode-lookup/use-cases/lookup-by-zipcode.usecase';

const zipCodeResolver = {
  Query: {
    getByZipCode: async (_: any, args: any): Promise<ZipCodeLookupModel> => {
      const { id } = args;

      return new LookupByZipCodeUseCase(new ZipCodeLookupRepository()).execute(
        id,
      );
    },
  },
};

export { zipCodeResolver };

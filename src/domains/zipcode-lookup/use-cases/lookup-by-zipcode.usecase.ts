import { ZipCodeLookupModel } from '../models/zipcode-lookup.model';
import { IZipCodeLookupRepository } from '../repositories/zipcode-lookup.repository';

class LookupByZipCodeUseCase {
  constructor(private readonly repository: IZipCodeLookupRepository) {}

  async execute(zipCode: string): Promise<ZipCodeLookupModel> {
    const lookup = await this.repository.findByZipCode(zipCode);

    if (!lookup) throw new Error();

    return lookup;
  }
}

export { LookupByZipCodeUseCase };

import { DeepPartial, getRepository, Repository } from 'typeorm';

import { ZipCodeLookupModel } from '../../../../domains/zipcode-lookup/models/zipcode-lookup.model';
import { IZipCodeLookupRepository } from '../../../../domains/zipcode-lookup/repositories/zipcode-lookup.repository';
import { ZipCodeLookupEntity } from '../entities/zipcode-lookup';

export class ZipCodeLookupRepository implements IZipCodeLookupRepository {
  private readonly repository: Repository<ZipCodeLookupEntity>;

  constructor() {
    this.repository = getRepository(ZipCodeLookupEntity);
  }

  public async save(
    zipCode: DeepPartial<ZipCodeLookupModel>,
  ): Promise<ZipCodeLookupModel> {
    return this.repository.save(zipCode);
  }

  public async findByZipCode(
    zipCode: string,
  ): Promise<ZipCodeLookupModel | undefined> {
    return this.repository.findOne({ where: { zipCode } });
  }
}

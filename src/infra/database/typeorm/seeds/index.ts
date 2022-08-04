import { ZipCodeLookupRepository } from '../repositories/zipcode-lookup.repository';
import { ZipCodeLookupSeed } from './zipcode-lookup/init';

export class TypeORMPostgresqlSeed {
  static async init(): Promise<void> {
    const repository = new ZipCodeLookupRepository();

    await new ZipCodeLookupSeed(repository).seed();
  }
}

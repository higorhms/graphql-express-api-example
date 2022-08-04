import { ZipCodeLookupModel } from '../models/zipcode-lookup.model';

export interface IZipCodeLookupRepository {
  save: (item: Partial<ZipCodeLookupModel>) => Promise<ZipCodeLookupModel>;
  findByZipCode: (id: string) => Promise<ZipCodeLookupModel | undefined>;
}

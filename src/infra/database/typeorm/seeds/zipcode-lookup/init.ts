import csvtojson from 'csvtojson';

import { ISeed } from '../seed.protocol';
import { IZipCodeLookupRepository } from '../../../../../domains/zipcode-lookup/repositories/zipcode-lookup.repository';
import { ZipCodeLookupModel } from '../../../../../domains/zipcode-lookup/models/zipcode-lookup.model';

export class ZipCodeLookupSeed implements ISeed {
  constructor(private readonly repository: IZipCodeLookupRepository) {}

  public async seed(): Promise<void> {
    console.log('🔖 MS ZipCodeAPI -> Seeding ZipCodeLookups');
    const csvFilePath = `${__dirname}/lookup-table.csv`;

    const csvData = await csvtojson().fromFile(csvFilePath);

    const zipCodes = csvData.map(
      csvZipCode =>
        ({
          zipCode: csvZipCode['Zip Code'],
          city: csvZipCode.City,
          county: csvZipCode.County,
        } as ZipCodeLookupModel),
    );

    for await (const zipCode of zipCodes) {
      const foundZipCode = await this.repository.findByZipCode(zipCode.zipCode);

      if (foundZipCode) return;

      await this.repository.save(zipCode);
    }
  }
}

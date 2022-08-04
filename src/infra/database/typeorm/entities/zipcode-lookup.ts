import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
} from 'typeorm';

import { ZipCodeLookupModel } from '../../../../domains/zipcode-lookup/models/zipcode-lookup.model';

@Entity()
export class ZipCodeLookupEntity implements ZipCodeLookupModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  zipCode: string;

  @Column()
  city: string;

  @Column()
  county: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}

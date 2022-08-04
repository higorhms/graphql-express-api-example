import 'reflect-metadata';
import 'dotenv/config';
import { createConnection } from 'typeorm';
import * as path from 'path';
import { ENV } from '../../env/env';

export class TypeormHelper {
  static async connectPostgreSQL(): Promise<void> {
    await createConnection({
      name: 'default',
      type: 'postgres',
      host: ENV.typeorm.postgresql.host || 'localhost',
      port: ENV.typeorm.postgresql.port || 5432,
      username: ENV.typeorm.postgresql.username,
      password: ENV.typeorm.postgresql.password,
      database: ENV.typeorm.postgresql.database,
      entities: [path.resolve(__dirname, 'entities', '*{.js,.ts}')],
      synchronize: true,
    });
  }
}

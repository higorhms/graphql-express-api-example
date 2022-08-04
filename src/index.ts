import { config } from 'dotenv';
import 'dotenv/config';

import { TypeormHelper } from './infra/database/typeorm';
import { ENV } from './infra/env/env';
import { TypeORMPostgresqlSeed } from './infra/database/typeorm/seeds';
import { server } from './infra/graphql/server';

config();

const port = ENV.apiPort;

TypeormHelper.connectPostgreSQL().then(async () => {
  await TypeORMPostgresqlSeed.init();

  server.listen(port, async () => {
    console.log(`🚀  Server ready at ${port}`);
  });
});

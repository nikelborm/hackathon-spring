import { registerAs } from '@nestjs/config';
import * as ormconfig from '../../ormconfig.json';

export const dbConfig = registerAs('database', () => ({
  type: ormconfig.type,
  host: ormconfig.host,
  port: ormconfig.port,
  username: ormconfig.username,
  password: ormconfig.password,
  entities: ormconfig.entities,
  // migrationsTableName: ormconfig.migrationsTableName,
  cli: ormconfig.cli,
  name: ormconfig.database,
  typeormLoggingMode: ormconfig.logging,
}));

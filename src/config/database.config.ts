import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path'
const typeOrmConfig : TypeOrmModuleOptions = {
  type: 'postgres',
  entities: [join(__dirname, "../", "**/*.entity{.ts,.js}")],
  migrations: [join(__dirname, "../", "database/migrations/**/*.ts")],
  logger: 'advanced-console',
  logging: 'all',
  maxQueryExecutionTime: 5000,
  dropSchema: false,
  synchronize: false,
  migrationsRun: false,
  cli: {
    migrationsDir: 'src/database/migrations'
  },
  logNotifications: true,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'dev_base',
};
export = typeOrmConfig;
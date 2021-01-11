import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig : TypeOrmModuleOptions = {
  type: 'postgres',
  entities: [`${__dirname}/../**/*.entity.{js,ts}`],
  migrations: [`${__dirname}/../**/*.migration.{js,ts}`],
  logger: 'advanced-console',
  logging: 'all',
  maxQueryExecutionTime: 5000,
  dropSchema: false,
  synchronize: true,
  migrationsRun: false,

  logNotifications: true,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'dev_base',
};

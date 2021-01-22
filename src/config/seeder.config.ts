import { join } from "path";

const typeOrmConfig = {
  name: 'seeder',
  entities: [join(__dirname, "../", "**/*.entity{.ts,.js}")],
  migrations: [join(__dirname, "../", "database/migrations/**/*.ts")],
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'dev_base',
  'factories': ['src/database/factories/**/*.factory{.ts,.js}'],
  'seeds': ['src/database/seeds/**/*.seed{.ts,.js}']
};
export = typeOrmConfig;
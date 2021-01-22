import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleModule } from './app/Role/index.module';
import { UserModule } from './app/User/index.module';
import * as pg_config from './config/database.config';
@Module({
  imports: [
    TypeOrmModule.forRoot(pg_config),
    UserModule,
    RoleModule
  ],
})
export class AppModule {}

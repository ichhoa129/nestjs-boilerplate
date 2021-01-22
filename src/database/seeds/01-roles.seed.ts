import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm';
import { Role } from 'src/app/Role/index.entity';

export default class CreateRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Role)
      .values([
        { name: 'Administrator' },
        { name: 'Moderator' },
        { name: 'User' }
      ])
      .execute();
  }
}
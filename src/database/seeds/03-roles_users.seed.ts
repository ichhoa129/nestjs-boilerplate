import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm';

export default class CreateRolesUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('users_roles')
      .values([
        { userId: 1, roleId: 1 },
        { userId: 2, roleId: 2 },
        { userId: 3, roleId: 3 }
      ])
      .execute();
  }
}
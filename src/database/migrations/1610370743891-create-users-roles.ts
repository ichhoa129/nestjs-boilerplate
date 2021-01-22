import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createUsersRoles1611063243891 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "users_roles",
        columns: [
          {
            name: "userId",
            type: "int",
          },
          {
            name: "roleId",
            type: "int",
          },
        ],
      }));
      await queryRunner.createForeignKey(
        'users_roles',
        new TableForeignKey({
          columnNames: ['userId'],
          referencedTableName: 'users',
          referencedColumnNames: ['id']
        })
      );
      await queryRunner.createForeignKey(
        'users_roles',
        new TableForeignKey({
          columnNames: ['roleId'],
          referencedTableName: 'roles',
          referencedColumnNames: ['id']
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users_roles");
    }

}

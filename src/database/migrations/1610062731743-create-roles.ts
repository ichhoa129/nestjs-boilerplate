import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createRoles1610062731743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "roles",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "createdAt",
            length: "6",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP(6)",
          },
          {
            name: "updatedAt",
            length: "6",
            type: "timestamp",
            isNullable: true,
            default: null,
            onUpdate: "CURRENT_TIMESTAMP(6)"
          },
          {
            name: "deletedAt",
            length: "6",
            type: "timestamp",
            isNullable: true,
            default: null,
          },
        ],
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("roles");
    }

}

import {MigrationInterface, QueryRunner, Table} from "typeorm";
export class createUsers1610370714308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "username",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "gender",
            type: "BOOLEAN",
            default: "true"
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
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users");
    }

}

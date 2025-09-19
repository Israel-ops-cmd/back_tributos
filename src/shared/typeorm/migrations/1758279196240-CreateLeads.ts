import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateLeads1758279196240 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'leads',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment'
            },
            {
              name: 'name',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'email',
              type: 'varchar',
              isNullable: false
            },
            {
              name: 'message',
              type: 'text',
              isNullable: true
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
              isNullable: false
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('leads')
    }

}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class UniqueNickname1647669730305 implements MigrationInterface {
  name = 'UniqueNickname1647669730305';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "nickname" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0" UNIQUE ("nickname")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_e2364281027b926b879fa2fa1e0"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "nickname"`);
  }
}

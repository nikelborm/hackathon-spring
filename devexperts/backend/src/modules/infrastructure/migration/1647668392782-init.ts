import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1647668392782 implements MigrationInterface {
  name = 'init1647668392782';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ticker" (
        "id" SERIAL NOT NULL,
        "symbol" character varying NOT NULL,
        "figi" character varying NOT NULL,
        "companyName" character varying NOT NULL,
        CONSTRAINT "PK_cdb1814b8bc63df6e8be5736bc8" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "ticker_bag" (
        "id" SERIAL NOT NULL,
        "name" character varying NOT NULL,
        "ownerId" integer NOT NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        CONSTRAINT "PK_2d9500feb0dc929f8a2f61c2ca5" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_preferredcurrency_enum" AS ENUM(
        'xcd', 'bbd', 'usd', 'cny', 'cop', 'crc', 'dop',
        'gtq', 'hnl', 'hkd', 'jmd', 'nio', 'pyg', 'pen',
        'eur', 'twd', 'ttd', 'mxn', 'rub', 'czk'
      )`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."user_preferredlanguage_enum" AS ENUM('ru', 'en')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" (
        "id" SERIAL NOT NULL,
        "firstName" character varying NOT NULL,
        "lastName" character varying NOT NULL,
        "preferredCurrency" "public"."user_preferredcurrency_enum" NOT NULL DEFAULT 'usd',
        "preferredLanguage" "public"."user_preferredlanguage_enum" NOT NULL DEFAULT 'ru',
        "email" character varying NOT NULL,
        "passwordHash" character varying NOT NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
        CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
        CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "dividend_history" (
        "id" SERIAL NOT NULL,
        "tickerId" integer,
        "dividendRate" numeric NOT NULL,
        "dividendExDate" date NOT NULL,
        "paymentDate" date NOT NULL,
        "recordDate" date NOT NULL,
        "indicatedAnnualDividend" date NOT NULL,
        "announcementDate" date NOT NULL,
        CONSTRAINT "PK_d39e0167c4e51eabca8430059aa" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "ticker_bag_to_ticker" (
        "tickerBagId" integer NOT NULL,
        "tickerId" integer NOT NULL,
        CONSTRAINT "PK_210dcdc826b0bb3f850cc4587a5" PRIMARY KEY ("tickerBagId", "tickerId")
      )`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_781e201d8a6aba288383e567ed" ON "ticker_bag_to_ticker" ("tickerBagId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_02bdb3ce5ea1dc321795b37d85" ON "ticker_bag_to_ticker" ("tickerId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "ticker_bag" ADD CONSTRAINT "FK_7baee4bffb43c540fe5491277a7" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "dividend_history" ADD CONSTRAINT "FK_ebb6beb4d2d79024b96c62a7b21" FOREIGN KEY ("tickerId") REFERENCES "ticker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticker_bag_to_ticker" ADD CONSTRAINT "FK_781e201d8a6aba288383e567ed7" FOREIGN KEY ("tickerBagId") REFERENCES "ticker_bag"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticker_bag_to_ticker" ADD CONSTRAINT "FK_02bdb3ce5ea1dc321795b37d85d" FOREIGN KEY ("tickerId") REFERENCES "ticker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "ticker_bag_to_ticker" DROP CONSTRAINT "FK_02bdb3ce5ea1dc321795b37d85d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticker_bag_to_ticker" DROP CONSTRAINT "FK_781e201d8a6aba288383e567ed7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "dividend_history" DROP CONSTRAINT "FK_ebb6beb4d2d79024b96c62a7b21"`,
    );
    await queryRunner.query(
      `ALTER TABLE "ticker_bag" DROP CONSTRAINT "FK_7baee4bffb43c540fe5491277a7"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_02bdb3ce5ea1dc321795b37d85"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_781e201d8a6aba288383e567ed"`,
    );
    await queryRunner.query(`DROP TABLE "ticker_bag_to_ticker"`);
    await queryRunner.query(`DROP TABLE "dividend_history"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TYPE "public"."user_preferredlanguage_enum"`);
    await queryRunner.query(`DROP TYPE "public"."user_preferredcurrency_enum"`);
    await queryRunner.query(`DROP TABLE "ticker_bag"`);
    await queryRunner.query(`DROP TABLE "ticker"`);
  }
}

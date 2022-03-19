import { Currency, Language } from 'src/types';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { TickerBag } from './tickerBag.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  firstName!: string;

  @Column({ nullable: false })
  lastName!: string;

  @Column({ nullable: false, unique: true })
  nickname!: string;

  @Column({
    type: 'enum',
    enum: Currency,
    default: Currency.USD,
    nullable: false,
  })
  preferredCurrency!: Currency;

  @Column({
    type: 'enum',
    enum: Language,
    default: Language.RU,
    nullable: false,
  })
  preferredLanguage!: Language;

  @Column({ nullable: false, unique: true })
  email!: string;

  @Column({ nullable: false }) // TODO: select: false and update query for it
  passwordHash!: string;

  @OneToMany(() => TickerBag, (tickerBag) => tickerBag.owner)
  ownTickerBags: TickerBag[];

  // ставится автоматически
  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  createdAt!: Date;

  // ставится автоматически
  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  updatedAt!: Date;
}

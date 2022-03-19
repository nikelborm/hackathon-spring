import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { Ticker, User } from './';

@Entity()
export class TickerBag {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  name!: string;

  @ManyToOne(() => User, (user) => user.ownTickerBags)
  @JoinColumn({ name: 'ownerId' })
  owner!: User;

  @Column({ nullable: false })
  ownerId!: number;

  @ManyToMany(() => Ticker, (ticker) => ticker.includedInTickerBags)
  @JoinTable({ name: 'ticker_bag_to_ticker' })
  tickers!: Ticker[];

  // ставится автоматически
  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  createdAt!: Date;

  // ставится автоматически
  @UpdateDateColumn({ type: 'timestamptz', nullable: false })
  updatedAt!: Date;
}

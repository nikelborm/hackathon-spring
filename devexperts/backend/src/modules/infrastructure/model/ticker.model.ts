import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { DividendHistory, TickerBag } from './';

@Entity()
export class Ticker {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  symbol!: string;

  @Column({ nullable: false })
  figi!: string;

  @Column({ nullable: false })
  companyName!: string;

  @ManyToMany(() => TickerBag, (tickerBag) => tickerBag.tickers)
  includedInTickerBags!: TickerBag[];

  @OneToMany(() => DividendHistory, (dividendHistory) => dividendHistory.ticker)
  historicalDividends!: DividendHistory[];
}

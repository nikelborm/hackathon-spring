import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  ValueTransformer,
} from 'typeorm';
import { Ticker } from '.';

class DateTransformer implements ValueTransformer {
  to(value: Date) {
    return value.toISOString().substring(0, 10);
  }
  from(value: string) {
    return new Date(value);
  }
}

class DecimalTransformer implements ValueTransformer {
  to(value: number) {
    return value.toString();
  }
  from(value: string) {
    return parseFloat(value);
  }
}

@Entity()
export class DividendHistory {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Ticker, (ticker) => ticker.historicalDividends)
  @JoinColumn({ name: 'tickerId' })
  ticker!: Ticker;

  @Column({ nullable: true })
  tickerId!: number;

  @Column({
    type: 'decimal',
    transformer: new DecimalTransformer(),
    nullable: false,
  })
  dividendRate!: number; // Dividend

  @Column({
    type: 'date',
    transformer: new DateTransformer(),
    nullable: false,
  })
  dividendExDate!: Date; // Ex-Dividend Date

  @Column({
    type: 'date',
    transformer: new DateTransformer(),
    nullable: false,
  })
  paymentDate!: Date; // Payment Date

  @Column({
    type: 'date',
    transformer: new DateTransformer(),
    nullable: false,
  })
  recordDate!: Date; // Record Date

  @Column({
    type: 'date',
    transformer: new DateTransformer(),
    nullable: false,
  })
  indicatedAnnualDividend!: Date; // Indicated Annual Dividend

  @Column({
    type: 'date',
    transformer: new DateTransformer(),
    nullable: false,
  })
  announcementDate!: Date; // Announcement Date
}

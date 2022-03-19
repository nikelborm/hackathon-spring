import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { messages } from 'src/config';
import { DeepPartial, Repository } from 'typeorm';
import { Ticker } from '../model';

@Injectable()
export class TickerRepo {
  constructor(
    @InjectRepository(Ticker)
    private repo: Repository<Ticker>,
  ) {}

  getAll() {
    return this.repo.find();
  }

  async getOneById(id: number) {
    const ticker = await this.repo.findOne(id);
    if (!ticker)
      throw new BadRequestException(
        messages.repo.common.cantGetNotFoundById('ticker', id),
      );
    return ticker;
  }

  async getManyInsideTickerBag(tickerBagId: number) {
    const tickers = await this.repo.query(
      `
        select ticker.* from ticker_bag_to_ticker
        inner join ticker on (ticker_bag_to_ticker."tickerId" = ticker.id)
        where "tickerBagId" = $1
      `,
      [tickerBagId],
    );
    console.log(
      '🚀 ~ file: ticker.repo.ts ~ line 38 ~ TickerRepo ~ getManyInsideTickerBag ~ tickers',
      tickers,
    );
    return tickers;
  }

  public async save(ticker: DeepPartial<Ticker>): Promise<Ticker> {
    const asd = this.repo.save(ticker);
    console.log(
      '🚀 ~ file: ticker.repo.ts ~ line 29 ~ TickerRepo ~ save ~ asd',
      asd,
    );
    return asd;
  }

  async delete(id: number) {
    await this.repo.delete(id);
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { messages } from 'src/config';
import { DeepPartial, ILike, Repository } from 'typeorm';
import { Ticker } from '../model';

@Injectable()
export class TickerRepo {
  constructor(
    @InjectRepository(Ticker)
    private repo: Repository<Ticker>,
  ) {}

  find(search: string) {
    return this.repo.find(
      search
        ? {
            where: [
              { companyName: ILike(`%${search}%`) },
              { figi: ILike(`%${search}%`) },
              { symbol: ILike(`%${search}%`) },
            ],
          }
        : void 0,
    );
  }

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
    return await this.repo.query(
      `
        select ticker.* from ticker_bag_to_ticker
        inner join ticker on (ticker_bag_to_ticker."tickerId" = ticker.id)
        where "tickerBagId" = $1
      `,
      [tickerBagId],
    );
  }

  public async save(ticker: DeepPartial<Ticker>): Promise<Ticker> {
    return await this.repo.save(ticker);
  }

  async delete(id: number) {
    await this.repo.delete(id);
  }
}

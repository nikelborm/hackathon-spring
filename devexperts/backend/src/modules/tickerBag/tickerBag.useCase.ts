import { Injectable } from '@nestjs/common';
import { model, repo } from '../infrastructure';
import { CreateTickerBagInput } from 'src/graphql';
import { DeepPartial } from 'typeorm';

@Injectable()
export class TickerBagUseCase {
  constructor(private readonly tickerBagRepo: repo.TickerBagRepo) {}

  async createTickerBag(
    { name, tickerIds }: CreateTickerBagInput,
    ownerId: number,
  ) {
    const tickerBag: DeepPartial<model.TickerBag> = {
      name,
      ownerId,
      tickers: tickerIds.map((id) => ({ id })),
    };
    return await this.tickerBagRepo.save(tickerBag);
  }
}

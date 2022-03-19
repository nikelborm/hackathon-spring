import { Injectable, UnauthorizedException } from '@nestjs/common';
import { model, repo } from '../infrastructure';
import { CreateTickerBagInput, UpdateTickerBagInput } from 'src/graphql';
import { DeepPartial } from 'typeorm';

@Injectable()
export class TickerBagUseCase {
  constructor(private readonly tickerBagRepo: repo.TickerBagRepo) {}

  async createTickerBag(
    { name, tickerIds }: CreateTickerBagInput,
    ownerId: number,
  ) {
    if (!ownerId) throw new UnauthorizedException();

    const tickerBag: DeepPartial<model.TickerBag> = {
      name,
      ownerId,
      tickers: tickerIds.map((id) => ({ id })),
    };
    return await this.tickerBagRepo.save(tickerBag);
  }

  async updateTickerBag(
    { id, name, tickerIds }: UpdateTickerBagInput,
    ownerId: number,
  ) {
    const { ownerId: originOwnerId } = await this.tickerBagRepo.getOneById(id);
    if (!ownerId || originOwnerId !== ownerId)
      throw new UnauthorizedException();

    const tickerBag: DeepPartial<model.TickerBag> = { id };

    if (name) tickerBag.name = name;
    if (tickerIds) tickerBag.tickers = tickerIds.map((id) => ({ id }));

    return await this.tickerBagRepo.save(tickerBag);
  }
}

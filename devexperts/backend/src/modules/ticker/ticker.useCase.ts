import { Injectable } from '@nestjs/common';
import { model, repo } from '../infrastructure';
import { CreateTickerInput } from 'src/graphql';
import { DeepPartial } from 'typeorm';

@Injectable()
export class TickerUseCase {
  constructor(private readonly tickerRepo: repo.TickerRepo) {}

  async createTicker({ companyName, figi, symbol }: CreateTickerInput) {
    const ticker: DeepPartial<model.Ticker> = {
      companyName,
      figi,
      symbol,
    };
    return await this.tickerRepo.save(ticker);
  }
}

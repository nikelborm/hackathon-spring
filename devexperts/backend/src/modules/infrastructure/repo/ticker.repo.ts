import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { messages } from 'src/config';
import { Repository } from 'typeorm';
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

  public async save(ticker: Ticker): Promise<Ticker> {
    return this.repo.save(ticker);
  }

  async delete(id: number) {
    await this.repo.delete(id);
  }
}

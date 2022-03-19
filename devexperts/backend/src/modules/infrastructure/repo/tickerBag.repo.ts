import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { messages } from 'src/config';
import { Repository } from 'typeorm';
import { TickerBag } from '../model';

@Injectable()
export class TickerBagRepo {
  constructor(
    @InjectRepository(TickerBag)
    private repo: Repository<TickerBag>,
  ) {}

  getAll() {
    return this.repo.find();
  }

  async getOneById(id: number) {
    const tickerBag = await this.repo.findOne(id);
    if (!tickerBag)
      throw new BadRequestException(
        messages.repo.common.cantGetNotFoundById('tickerBag', id),
      );
    return tickerBag;
  }

  public async save(tickerBag: TickerBag): Promise<TickerBag> {
    return this.repo.save(tickerBag);
  }

  async delete(id: number) {
    await this.repo.delete(id);
  }
}

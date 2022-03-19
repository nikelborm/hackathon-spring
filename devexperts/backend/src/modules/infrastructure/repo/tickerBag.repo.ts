import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { messages } from 'src/config';
import { DeepPartial, Repository } from 'typeorm';
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

  async getManyBy(ownerId: number) {
    return await this.repo.find({
      ownerId,
    });
  }

  public async save(tickerBag: DeepPartial<TickerBag>): Promise<TickerBag> {
    return this.repo.save(tickerBag);
  }

  async delete(id: number) {
    await this.repo.delete(id);
  }
}

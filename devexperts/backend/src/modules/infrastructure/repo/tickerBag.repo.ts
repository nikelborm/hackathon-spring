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
    return await this.repo.save(tickerBag);
  }

  async delete(tickerBagId: number, userId: number) {
    await this.repo
      .createQueryBuilder()
      .delete()
      .from('ticker_bag')
      .where('ticker_bag.id = :tickerBagId', { tickerBagId })
      .andWhere('ticker_bag."ownerId" = :userId', { userId })
      .execute();
  }
}

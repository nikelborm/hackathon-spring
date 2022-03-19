import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { messages } from 'src/config';
import { DeepPartial, Repository } from 'typeorm';
import { DividendHistory } from '../model';

@Injectable()
export class DividendHistoryRepo {
  constructor(
    @InjectRepository(DividendHistory)
    private repo: Repository<DividendHistory>,
  ) {}

  getAll() {
    return this.repo.find();
  }

  async getOneById(id: number) {
    const dividendHistory = await this.repo.findOne(id);
    if (!dividendHistory)
      throw new BadRequestException(
        messages.repo.common.cantGetNotFoundById('dividendHistory', id),
      );
    return dividendHistory;
  }

  public async save(
    dividendHistory: DeepPartial<DividendHistory>,
  ): Promise<DividendHistory> {
    return this.repo.save(dividendHistory);
  }

  async delete(id: number) {
    await this.repo.delete(id);
  }
}

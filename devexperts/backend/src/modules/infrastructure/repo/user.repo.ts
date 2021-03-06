import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { messages } from 'src/config';
import { DeepPartial, Repository } from 'typeorm';
import { User } from '../model';

@Injectable()
export class UserRepo {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  getAll() {
    return this.repo.find();
  }

  async getOneById(id: number) {
    const user = await this.repo.findOne(id);
    if (!user)
      throw new BadRequestException(
        messages.repo.common.cantGetNotFoundById('user', id),
      );
    return user;
  }

  async getOneByIdWithTickerBags(id: number) {
    const user = await this.repo.findOne(id, {
      relations: ['tickerBags'],
    });
    if (!user)
      throw new BadRequestException(
        messages.repo.common.cantGetNotFoundById('user', id),
      );
    return user;
  }

  public async getOneByLogin(login: string): Promise<User> {
    return this.repo.findOne({
      where: [{ email: login }, { nickname: login }],
    });
  }

  public async save(user: DeepPartial<User>): Promise<User> {
    return this.repo.save(user);
  }

  async delete(id: number) {
    await this.repo.delete(id);
  }
}

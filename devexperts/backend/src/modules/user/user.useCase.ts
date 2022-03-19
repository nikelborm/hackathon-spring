import { Injectable } from '@nestjs/common';
import { model, repo } from '../infrastructure';
import * as bcrypt from 'bcrypt';
import { Currency, Language } from 'src/types';
import { CreateUserInput } from 'src/graphql';

@Injectable()
export class UserUseCase {
  constructor(private readonly userRepo: repo.UserRepo) {}

  async createUser({
    password,
    email,
    firstName,
    lastName,
    nickname,
  }: CreateUserInput) {
    const user = {
      email,
      firstName,
      lastName,
      nickname,
      passwordHash: await bcrypt.hash(password, 8),
      preferredCurrency: Currency.RUB,
      preferredLanguage: Language.RU,
    };
    return this.userRepo.save(user as model.User);
  }
}

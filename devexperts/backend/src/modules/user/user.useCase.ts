import { Injectable } from '@nestjs/common';
import { model, repo } from '../infrastructure';
import * as bcrypt from 'bcrypt';
import { Currency, Language } from 'src/types';

@Injectable()
export class UserUseCase {
  constructor(private readonly userRepo: repo.UserRepo) {}

  async createUser(createUserInput /* : CreateUserInput */) {
    const user = new model.User();
    user.passwordHash = await bcrypt.hash(createUserInput.password, 8);
    user.email = createUserInput.email;
    user.firstName = createUserInput.firstName;
    user.lastName = createUserInput.lastName;
    user.preferredCurrency = Currency.RUB;
    user.preferredLanguage = Language.RU;
    return this.userRepo.save(user);
  }
}

import { Injectable } from '@nestjs/common';
import { repo } from '../infrastructure';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationUseCase {
  constructor(private userRepository: repo.UserRepo) {}

  public async validateUser(login: string, password: string) {
    const user = await this.userRepository.getOneByLogin(login);
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      const { passwordHash, ...rest } = user;
      return rest;
    }
    return null;
  }
}

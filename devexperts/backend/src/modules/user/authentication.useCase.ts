import { Injectable } from '@nestjs/common';
import { repo } from '../infrastructure';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationUseCase {
  constructor(private userRepository: repo.UserRepo) {}

  public async validateUser(login: string, password: string) {
    const user = await this.userRepository.getOneByLogin(login);
    const compareResult = await bcrypt.compare(password, user.passwordHash);
    if (user && compareResult) {
      const { passwordHash, ...rest } = user;
      return rest;
    }
    return null;
  }
}

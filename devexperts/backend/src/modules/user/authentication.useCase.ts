import { Injectable } from '@nestjs/common';
import { repo } from '../infrastructure';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationUseCase {
  constructor(private userRepository: repo.UserRepo) {}

  public async validateUser(login: string, password: string) {
    const user = await this.userRepository.getOneByLogin(login);

    if (!user) return null;

    const { passwordHash, ...rest } = user;

    if (!(await bcrypt.compare(password, passwordHash))) return null;

    return rest;
  }
}

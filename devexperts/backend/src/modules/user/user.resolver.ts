import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createParamDecorator, UseGuards } from '@nestjs/common';
import { CreateUserInput } from 'src/graphql';
import { model, repo } from '../infrastructure';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { UserUseCase } from './user.useCase';

export const CurrentUser = createParamDecorator((_, ctx) =>
  // @ts-expect-error тут всё хорошо
  JSON.parse(ctx.getArgByIndex<Request>(2).req.session.user || 'null'),
);

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userRepo: repo.UserRepo,
    private readonly userUseCase: UserUseCase,
  ) {}

  @UseGuards(LocalGuard)
  @Mutation('login')
  public async loginUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return this.userRepo.getOneByLogin(username);
  }

  @Query('currentUser')
  public async getCurrentUser(@CurrentUser() shituser) {
    return this.userRepo.getOneById(shituser?.id);
  }

  @Mutation('createUser')
  public async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return this.userUseCase.createUser(createUserInput);
  }
}

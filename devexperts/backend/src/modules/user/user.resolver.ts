import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CreateUserInput } from 'src/graphql';
import { model, repo } from '../infrastructure';
import { LocalGuard } from './guards/local.guard';
import { UserUseCase } from './user.useCase';
import { CurrentUser } from 'src/tools';

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userRepo: repo.UserRepo,
    private readonly tickerBagRepo: repo.TickerBagRepo,
    private readonly userUseCase: UserUseCase,
  ) {}

  @UseGuards(LocalGuard)
  @Mutation('login')
  public async loginUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return await this.userRepo.getOneByLogin(username);
  }

  @Query('currentUser')
  public async getCurrentUser(@CurrentUser() shituser) {
    return await this.userRepo.getOneById(shituser?.id);
  }

  @ResolveField('ownTickerBags')
  async getOwnTickerBags(@Parent() user: model.User) {
    return await this.tickerBagRepo.getManyBy(user.id);
  }

  @Mutation('createUser')
  public async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    return await this.userUseCase.createUser(createUserInput);
  }
}

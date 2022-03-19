import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { model, repo } from '../infrastructure';
import { CreateTickerBagInput } from 'src/graphql';
import { TickerBagUseCase } from './tickerBag.useCase';
import { CurrentUser } from 'src/tools';

@Resolver('TickerBag')
export class TickerBagResolver {
  constructor(
    private readonly tickerBagUseCase: TickerBagUseCase,
    private readonly tickerBagRepo: repo.TickerBagRepo,
    private readonly tickerRepo: repo.TickerRepo,
    private readonly userRepo: repo.UserRepo,
  ) {}

  @Mutation('createTickerBag')
  public async createTickerBag(
    @CurrentUser() user: model.User,
    @Args('createTickerBagInput')
    createTickerBagInput: CreateTickerBagInput,
  ) {
    return await this.tickerBagUseCase.createTickerBag(
      createTickerBagInput,
      user.id,
    );
  }

  @Query('myTickerBags')
  public async getCurrentUserTickerBags(@CurrentUser() user: model.User) {
    return await this.tickerBagRepo.getManyBy(user.id);
  }

  @ResolveField('owner')
  async getOwnTickerBags(@Parent() tickerBag: model.TickerBag) {
    return await this.userRepo.getOneById(tickerBag.ownerId);
  }

  @ResolveField('tickers')
  async getTickersOfTickerBag(@Parent() tickerBag: model.TickerBag) {
    return await this.tickerRepo.getManyInsideTickerBag(tickerBag.id);
  }
}

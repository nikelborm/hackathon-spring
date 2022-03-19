import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTickerInput, TickersInput } from 'src/graphql';
import { repo } from '../infrastructure';
import { TickerUseCase } from './ticker.useCase';

@Resolver('Ticker')
export class TickerResolver {
  constructor(
    private readonly tickerUseCase: TickerUseCase,
    private readonly tickerRepo: repo.TickerRepo,
  ) {}

  @Query('tickers')
  public async getTickers(@Args('tickersInput') tickersInput: TickersInput) {
    return await this.tickerRepo.find(tickersInput?.search);
  }

  @Mutation('createTicker')
  public async createTicker(
    @Args('createTickerInput')
    createTickerInput: CreateTickerInput,
  ) {
    return await this.tickerUseCase.createTicker(createTickerInput);
  }
}

import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateTickerInput } from 'src/graphql';
import { TickerUseCase } from './ticker.useCase';

@Resolver('Ticker')
export class TickerResolver {
  constructor(private readonly tickerUseCase: TickerUseCase) {}

  @Mutation('createTicker')
  public async createTicker(
    @Args('createTickerInput')
    createTickerInput: CreateTickerInput,
  ) {
    return await this.tickerUseCase.createTicker(createTickerInput);
  }
}

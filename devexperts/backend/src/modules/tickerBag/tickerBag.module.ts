import { Module } from '@nestjs/common';
import { TickerBagResolver } from './tickerBag.resolver';
import { TickerBagUseCase } from './tickerBag.useCase';

@Module({
  providers: [TickerBagResolver, TickerBagUseCase],
})
export class TickerBagModule {}

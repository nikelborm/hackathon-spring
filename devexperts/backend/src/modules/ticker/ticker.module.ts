import { Module } from '@nestjs/common';
import { TickerResolver } from './ticker.resolver';
import { TickerUseCase } from './ticker.useCase';

@Module({
  providers: [TickerResolver, TickerUseCase],
})
export class TickerModule {}

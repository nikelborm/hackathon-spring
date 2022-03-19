import { Module } from '@nestjs/common';
import { ImportUseCase } from './import.useCase';

@Module({
  providers: [ImportUseCase],
})
export class ImportModule {}

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ImportUseCase {
  constructor(private readonly configService: ConfigService) {
    console.log(
      "🚀 ~ file: import.useCase.ts ~ line 13 ~ PaymentsUseCase ~ constructor ~ this.configService.get('apiKey')",
      this.configService.get('apiKey'),
    );
  }
}

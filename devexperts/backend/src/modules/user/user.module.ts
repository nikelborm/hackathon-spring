import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserResolver } from './user.resolver';
import { AuthenticationUseCase } from './authentication.useCase';
import { LocalStrategy } from './strategies/local.strategy';
import { LocalSerializer } from './serializers/local.serializer';
import { LocalGuard } from './guards/local.guard';
import { UserUseCase } from './user.useCase';

@Module({
  imports: [
    PassportModule.register({
      session: true,
      defaultStrategy: 'local',
    }),
  ],
  providers: [
    UserResolver,
    AuthenticationUseCase,
    LocalStrategy,
    LocalSerializer,
    LocalGuard,
    UserUseCase,
  ],
  exports: [UserUseCase],
})
export class UserModule {}

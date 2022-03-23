import { MiddlewareConsumer, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { appConfig, dbConfig } from './config';
import { AccessLogMiddleware } from './tools';
import { UserModule } from './modules/user';
import { InfrastructureModule } from './modules/infrastructure';
import { ImportModule } from './modules/import';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TickerBagModule } from './modules/tickerBag';
import { TickerModule } from './modules/ticker';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: [appConfig, dbConfig],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./src/schema.graphql'],
      driver: ApolloDriver,
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    InfrastructureModule,
    UserModule,
    ImportModule,
    TickerBagModule,
    TickerModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AccessLogMiddleware).forRoutes('*');
  }
}

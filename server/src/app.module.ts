// src/app.module.ts
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import { databaseProviders } from './database/database.providers';
import { DatabaseModule } from './database/database.module';
import { InformationModule } from './information/information.module';
import { InputService } from './input/input.service';
import { DataService } from './data/data.service';
import { DataModule } from './data/data.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
    DatabaseModule,
    InformationModule,
    DataModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserService,
    UserResolver,
    ...databaseProviders,
    ...userProviders,
    InputService,
    DataService,
  ],
})
export class AppModule {}

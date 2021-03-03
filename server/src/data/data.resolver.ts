// src/user/user.resolver.ts
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { IData } from './data.input';
import { DataService } from '../data/data.service';
import { Data } from './data.schema';

@Resolver(() => Data)
export class DataResolver {
  constructor(private dataService: DataService) {}

  @Mutation(() => Data)
  async createData(@Args('input') input:IData) {
    return this.dataService.create(input);
  }

  @Query(() => [Data])
  async allData() {
    return this.dataService.find();
  }
}

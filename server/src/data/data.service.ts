// src/user/user.service.ts
import { Model, FilterQuery, CreateQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Data } from './data.schema';

@Injectable()
export class DataService {
  constructor(
    @Inject('DATA_MODEL')
    private dataModel: Model<Data>,
  ) {}

  async create(input: CreateQuery<Data>): Promise<Data> {
    return this.dataModel.create(input);
  }

  async findOne(query: FilterQuery<Data>): Promise<Data> {
    return this.dataModel.findOne(query).lean();
  }

  async find(): Promise<Data[]> {
    return this.dataModel.find().lean();
  }
}
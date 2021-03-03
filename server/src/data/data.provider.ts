import { Connection } from 'mongoose';
import { dataSchema } from './data.schema';

export const userProviders = [
  {
    provide: 'DATA_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Data', dataSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

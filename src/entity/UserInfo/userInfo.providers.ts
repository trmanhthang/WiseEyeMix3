import { DataSource } from 'typeorm';
import { UserInfo } from './userInfo.entity';

export const userProviders = [
  {
    provide: 'USERINFO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserInfo),
    inject: ['DATA_SOURCE'],
  },
];

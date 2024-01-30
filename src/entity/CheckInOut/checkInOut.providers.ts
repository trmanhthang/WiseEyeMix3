import { DataSource } from 'typeorm';
import { CheckInOut } from './checkInOut.entity';

export const checkInOutProviders = [
  {
    provide: 'CHECKIN_OUT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(CheckInOut),
    inject: ['DATA_SOURCE'],
  },
];

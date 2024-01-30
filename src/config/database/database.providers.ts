import { DataSource } from 'typeorm';
import { UserInfo } from '../../entity/UserInfo/userInfo.entity';
import { CheckInOut } from '../../entity/CheckInOut/checkInOut.entity';
import * as process from 'process';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mssql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [UserInfo, CheckInOut],
        synchronize: false,
        extra: {
          trustServerCertificate: true,
        },
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];

import { Module } from '@nestjs/common';
import { UserModule } from './app/user/user.module';
import { CheckinModule } from './app/checkin/checkin.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, CheckinModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

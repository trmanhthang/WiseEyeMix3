import { Module } from '@nestjs/common';
import { UserModule } from './app/user/user.module';
import { CheckinModule } from './app/checkin/checkin.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, CheckinModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

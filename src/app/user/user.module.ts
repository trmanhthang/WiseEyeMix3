import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../config/database/database.module';
import { userProviders } from '../../entity/UserInfo/userInfo.providers';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [UserService],
})
export class UserModule {}

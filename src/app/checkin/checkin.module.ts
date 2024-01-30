import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../config/database/database.module';
import { CheckinController } from './checkin.controller';
import { checkInOutProviders } from '../../entity/CheckInOut/checkInOut.providers';
import { CheckinService } from './checkin.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CheckinController],
  providers: [...checkInOutProviders, CheckinService],
  exports: [CheckinService],
})
export class CheckinModule {}

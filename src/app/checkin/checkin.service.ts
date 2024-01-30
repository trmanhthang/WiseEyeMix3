import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CheckInOut } from '../../entity/CheckInOut/checkInOut.entity';

@Injectable()
export class CheckinService {
  constructor(
    @Inject('CHECKIN_OUT_REPOSITORY')
    private readonly checkInOutRepository: Repository<CheckInOut>,
  ) {}
}

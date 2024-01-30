import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserInfo } from '../../entity/UserInfo/userInfo.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USERINFO_REPOSITORY')
    private readonly userInfoRepository: Repository<UserInfo>,
  ) {}

  async getAll() {
    return await this.userInfoRepository
      .createQueryBuilder('user')
      .select([
        'user.userEnrollNumber',
        'user.userFullCode',
        'user.userFullName',
        'user.userEnrollName',
        'user.userCardNo',
        'user.userHireDay',
        'user.userSex',
      ])
      .getMany();
  }

  async getDataUserCheckIn(month: string, year: string) {
    return await this.userInfoRepository
      .createQueryBuilder('userInfo')
      .leftJoinAndSelect('userInfo.checkInOuts', 'checkIn')
      .where('MONTH(checkIn.timeStr) = :month', { month: month })
      .andWhere('YEAR(checkIn.timeStr) = :year', { year: year })
      .select([
        'userInfo.userEnrollNumber',
        'userInfo.userFullCode',
        'userInfo.userFullName',
        'userInfo.userEnrollName',
        'userInfo.userCardNo',
        'userInfo.userHireDay',
        'checkIn.timeStr',
        'checkIn.timeDate',
        'checkIn.OriginType',
        'checkIn.cardNo',
      ])
      .getMany();
  }
}

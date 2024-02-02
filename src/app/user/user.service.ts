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

  /**
   * Lấy thông tin check in trong 1 tháng
   * **/
  async getDataCheckIn(month, year) {
    return await this.userInfoRepository.query(
      'SELECT \n' +
        '    dbo.UserInfo.UserEnrollNumber AS ID,\n' +
        '    dbo.UserInfo.UserFullName AS name,\n' +
        '    dbo.UserInfo.UserEnrollName AS subname,\n' +
        '    SUM(DATEDIFF(SECOND, CONVERT(TIME, CheckInOut.MinTimeStr), CONVERT(TIME, CheckInOut.MaxTimeStr))) / 3600.0 AS total_hours\n' +
        'FROM \n' +
        '    dbo.UserInfo\n' +
        'LEFT JOIN (\n' +
        '    SELECT\n' +
        '        UserEnrollNumber,\n' +
        '        MIN(TimeStr) AS MinTimeStr,\n' +
        '        MAX(TimeStr) AS MaxTimeStr\n' +
        '    FROM\n' +
        '        dbo.CheckInOut\n' +
        '    WHERE \n' +
        `        MONTH(TimeStr) = ${month} 
` +
        `        AND YEAR(TimeStr) = ${year}
` +
        '    GROUP BY \n' +
        '        UserEnrollNumber, CONVERT(DATE, TimeStr)\n' +
        ') AS CheckInOut\n' +
        'ON\n' +
        '    dbo.UserInfo.UserEnrollNumber = CheckInOut.UserEnrollNumber\n' +
        'GROUP BY \n' +
        '    dbo.UserInfo.UserEnrollNumber,\n' +
        '    dbo.UserInfo.UserFullName,\n' +
        '    dbo.UserInfo.UserEnrollName\n' +
        'ORDER BY \n' +
        '    dbo.UserInfo.UserEnrollNumber ASC;',
    );
  }

  async getDataCheckInByUser(idUser, month, year) {
    return await this.userInfoRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.checkInOuts', 'checkInOuts')
      .where('user.id = :id', { id: idUser })
      .andWhere('MONTH(checkInOuts.timeStr) = :month', { month: month })
      .andWhere('YEAR(checkInOuts.timeStr) = :year', { year: year })
      .select([
        'user.userEnrollNumber',
        'user.userFullCode',
        'user.userFullName',
        'user.userEnrollName',
        'user.userCardNo',
        'user.userHireDay',
        'checkIn.timeStr',
        'checkIn.timeDate',
        'checkIn.OriginType',
        'checkIn.cardNo',
      ])
      .getOne();
  }
}

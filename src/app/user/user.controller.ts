import { Controller, Get, Query, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getAll(@Res() res) {
    const users = await this.userService.getAll();
    res.json(users);
  }

  /**
  Lấy thông tin check in của tất cả 
  **/
  @Get('checkin')
  async getDataCheckIn(
    @Query('month') month: string,
    @Query('year') year: string,
    @Res() res,
  ) {
    const user = await this.userService.getDataCheckIn(month, year);
    res.json(user);
  }

  /**
   * Lấy thông tin check in chi tiết của 1 nhân viên
   **/
  @Get('checkin_detail')
  async getDataCheckInByUser(
    @Query('id') id,
    @Query('month') month,
    @Query('year') year,
    @Res() res,
  ) {
    const data = await this.userService.getDataCheckInByUser(id, month, year);
    res.json(data);
  }
}

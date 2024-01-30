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

  @Get('checkin')
  async getDataCheckIn(
    @Query('month') month: string,
    @Query('year') year: string,
    @Res() res,
  ) {
    console.log(`month: ${month}, year: ${year}`);
    const user = await this.userService.getDataUserCheckIn(month, year);
    res.json(user);
  }
}

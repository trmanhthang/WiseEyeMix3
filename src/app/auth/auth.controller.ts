import { Controller, HttpStatus, Post, Query, Res } from "@nestjs/common";
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Lấy token để test authen
   * **/
  @Post('login')
  async login(
    @Query('email') email: string,
    @Query('password') password: string,
    @Res() res,
  ) {
    const token = await this.authService.createToken(email, password);
    if (token) {
      res.cookie('token', token).json('Lấy token thành công!');
    } else {
      res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Tài khoản không tồn tại!',
      });
    }
  }
}

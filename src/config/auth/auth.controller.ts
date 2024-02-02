import { Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Lấy token để test authen
   * **/
  @Post('login')
  async login(@Res() res) {
    const token = await this.authService.createToken();
    res.cookie('token', token).json('Lấy token thành công!');
  }
}

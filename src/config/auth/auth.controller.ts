import { Controller, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('token')
  async createToken(@Res() res) {
    const token = await this.authService.createToken();
    res.cookie('token', token).json('Lấy token thành công!');
  }
}

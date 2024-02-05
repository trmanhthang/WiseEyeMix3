import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  account = [
    {
      email: 'thangmt868@gmail.com',
      password: '12345678',
      role: 'ADMIN',
    },
    {
      email: 'truongthang300@yahoo.com',
      password: '12345678',
      role: 'USER',
    },
  ];

  async createToken() {
    const payload = {
      username: 'abc',
      sub: '123',
    };
    return this.jwtService.sign(payload, {});
  }

  async validateToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}

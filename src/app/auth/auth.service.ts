import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { account } from '../../fakeData/account';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async createToken(email: string, password: string) {
    let user;
    for (let i = 0; i < account.length; i++) {
      if (email === account[i].email) {
        user = account[i];
        break;
      }
    }

    if (user && user.password == password) {
      return this.jwtService.sign(user, {});
    }
    return null;
  }

  async validateToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}

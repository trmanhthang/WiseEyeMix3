import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

export class AuthorGuard implements CanActivate {
  constructor(
    private role: string,
    private readonly jwtService: JwtService,
  ) {}
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  async canActivate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: ExecutionContext,
  ): Promise<boolean | Promise<boolean> | Observable<boolean>> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies['token'];

    try {
      const data = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      console.log(data);

      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}

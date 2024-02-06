import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean | Promise<boolean> | Observable<boolean>> {
    const request = context.switchToHttp().getRequest();
    const token = request.cookies['token'];

    /**
     * Kiểm tra có token trên request hay không?
     * **/
    if (!token) {
      throw new ForbiddenException();
    }

    /**
     * Kiểm tra tính hợp lệ của token
     * **/
    try {
      await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}

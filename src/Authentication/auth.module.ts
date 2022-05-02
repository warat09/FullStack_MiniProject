import { MainModule } from './../Main/Main.module';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.TOKEN_KEY,
        signOptions: { expiresIn: "24h" },
      }),
    }),
  ],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
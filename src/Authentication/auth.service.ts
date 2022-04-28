import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
      private jwtService: JwtService
    ) {}
    async login(payload: any) {
      return this.jwtService.sign(payload);
    }
}
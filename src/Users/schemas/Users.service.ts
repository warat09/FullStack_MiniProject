import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User,UserDocument } from './User.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UsersModel: Model<UserDocument>) {}

  async createUser(user:User):Promise<User>{
      const newUser = new this.UsersModel(user)
      return newUser.save()
  }

  async findAll(): Promise<User[]> {
    return this.UsersModel.find().exec();
  }
}

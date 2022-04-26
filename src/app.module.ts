import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User,UserSchema } from './Users/schemas/User.schema';
import { UsersController } from './Users/schemas/Users.controller';
import { UsersService } from './Users/schemas/Users.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://warat:cskmutnb.ac.th@cluster0.cixg9.mongodb.net/test'),
                  MongooseModule.forFeature([{name:User.name,schema:UserSchema}])
],
  controllers: [AppController,UsersController],
  providers: [AppService,UsersService],
})
export class AppModule {}

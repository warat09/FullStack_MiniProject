import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./User.schema";
import { UsersController } from "./Users.controller";
import { UsersService } from "./Users.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'User',schema:UserSchema}])],
    controllers:[UsersController],
    providers:[UsersService]
})
export class UsersModel{}
import { Body, Controller, Get, Post } from "@nestjs/common";
import { User } from "./User.schema";
import { UsersService } from "./Users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly UserService: UsersService){}
    @Get()
    async index() {
        return await this.UserService.findAll();
    }
    @Post()
    async createUser(@Body() userDto:User):Promise<User>{
        return this.UserService.createUser(userDto)
    }
    
}
import { Body, Controller, Get, Post } from "@nestjs/common";
import { Teacher } from "../schemas/Teacher.schemas";
import { TeacherService } from "../service/Teacher.service";
@Controller('Teachers')
export class TeacherController {
    constructor(private readonly TeacherService: TeacherService){}
    @Get()
    async index() {
        return await this.TeacherService.findAll();
    }
    @Post()
    async createStudent(@Body() TeacherDto:Teacher):Promise<Teacher>{
        return this.TeacherService.createStudent(TeacherDto)
    }
    
}
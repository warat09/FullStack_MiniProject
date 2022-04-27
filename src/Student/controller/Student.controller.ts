import { Body, Controller, Get, Post } from "@nestjs/common";
import { Student } from "../schemas/Student.schemas";
import { StudentService } from "../service/Student.service";
@Controller('Students')
export class StudentController {
    constructor(private readonly StudentService: StudentService){}
    @Get()
    async index() {
        return await this.StudentService.findAll();
    }
    @Post()
    async createStudent(@Body() StudentDto:Student):Promise<Student>{
        return this.StudentService.createStudent(StudentDto)
    }
    
}
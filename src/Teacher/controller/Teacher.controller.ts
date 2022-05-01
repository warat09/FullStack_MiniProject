import { Body, Controller, Get, Post } from '@nestjs/common';
import { Teacher } from '../schemas/Teacher.schemas';
import { TeacherService } from '../service/Teacher.service';
import * as bcrypt from 'bcrypt';
@Controller('Teachers')
export class TeacherController {
  constructor(private readonly TeacherService: TeacherService) {}
  @Get()
  async index() {
    return await this.TeacherService.findAll();
  }
  @Post()
  async createStudent(@Body() TeacherDto: Teacher): Promise<Teacher> {
    const newTeacher:Teacher = {
        Teacher_ID:TeacherDto.Teacher_ID,
        Teacher_ID_Teacher:TeacherDto.Teacher_ID_Teacher,
        Teacher_Password:await bcrypt.hash(TeacherDto.Teacher_ID,10),
        Teacher_Name:TeacherDto.Teacher_Name,
        Teacher_Sur_Name:TeacherDto.Teacher_Sur_Name,
        Teacher_DOB:TeacherDto.Teacher_DOB
    }
    return this.TeacherService.createStudent(newTeacher);
  }
}

import { JwtAuthGuard } from './../../Authentication/jwt-auth.guard';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Student } from '../schemas/Student.schemas';
import { StudentService } from '../service/Student.service';
import * as bcrypt from 'bcrypt';
@Controller('Students')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}
  @Get()
  async index() {
    return await this.StudentService.findAll();
  }
  @Post()
  async createStudent(@Body() StudentDto: Student): Promise<Student> {
    const newStudent:Student={
      Student_ID:StudentDto.Student_ID,
      Student_ID_Student:StudentDto.Student_ID_Student,
      Student_Password:await bcrypt.hash(StudentDto.Student_ID,10),
      Student_Name:StudentDto.Student_Name,
      Student_Sur_Name:StudentDto.Student_Sur_Name,
      Student_Phone:StudentDto.Student_Phone,
      Student_Section:StudentDto.Student_Section,
      Student_Year:2565,
      Student_Semester:"1",
      Student_DOB:StudentDto.Student_DOB
    }
    return this.StudentService.createStudent(newStudent);
  }
}

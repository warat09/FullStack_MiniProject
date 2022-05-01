import { Body, Controller, Get, Post } from '@nestjs/common';
import { Subject } from '../schemas/Subject.schemas';
import { SubjectService } from '../service/Subject.service';
@Controller('Subjects')
export class SubjectController {
  constructor(private readonly SubjectService: SubjectService) {}
  @Get()
  async index() {
    return await this.SubjectService.findAll();
  }
  @Post()
  async createSubject(@Body() SubjectDto: Subject): Promise<Subject> {
    console.log(SubjectDto.Requirement_Subject.toString()==="")
    let newSubject:Subject;
    if(SubjectDto.Requirement_Subject.toString()==="")
    {
      newSubject = {
        Subject_ID:SubjectDto.Subject_ID,
        Subject_Name:SubjectDto.Subject_Name,
        Subject_Des:SubjectDto.Subject_Des,
        Subject_Student_Year:SubjectDto.Subject_Student_Year,
        Requirement_Subject:[]
      }
    }
    else
    {
      newSubject = {
        Subject_ID:SubjectDto.Subject_ID,
        Subject_Name:SubjectDto.Subject_Name,
        Subject_Des:SubjectDto.Subject_Des,
        Subject_Student_Year:SubjectDto.Subject_Student_Year,
        Requirement_Subject:SubjectDto.Requirement_Subject.toString().split(",")
      }
    }
    return this.SubjectService.createSubject(newSubject);
  }
  
}

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
    return this.SubjectService.createSubject(SubjectDto);
  }
}

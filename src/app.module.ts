import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Student,StudentSchema } from './Student/schemas/Student.schemas';
import { StudentController } from './Student/controller/Student.controller';
import { StudentService } from './Student/service/Student.service';

import { Teacher,TeacherSchema } from './Teacher/schemas/Teacher.schemas';
import { TeacherController } from './Teacher/controller/Teacher.controller';
import { TeacherService } from './Teacher/service/Teacher.service';

import { Subject,SubjectSchema } from './Subject/schemas/Subject.schemas';
import { SubjectController } from './Subject/controller/Subject.controller';
import { SubjectService } from './Subject/service/Subject.service';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://warat:cskmutnb.ac.th@cluster0.cixg9.mongodb.net/test'),
                  MongooseModule.forFeature([{name:Student.name,schema:StudentSchema}]),
                  MongooseModule.forFeature([{name:Teacher.name,schema:TeacherSchema}]),
                  MongooseModule.forFeature([{name:Subject.name,schema:SubjectSchema}]),

],
  controllers: [AppController,StudentController,TeacherController,SubjectController],
  providers: [AppService,StudentService,TeacherService,SubjectService],
})
export class AppModule {}

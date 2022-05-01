import { TeachService } from './Teach/service/Teach.service';
import { RegistrationService } from './Registration/service/Registration.service';
import { StudentModel } from './Student/Student.module';
import { AuthService } from './Authentication/auth.service';
import { JwtService } from '@nestjs/jwt';
import { MainController } from './Main/controller/Main.controller';
import { AuthModule } from 'src/Authentication/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Student, StudentSchema } from './Student/schemas/Student.schemas';
import { StudentController } from './Student/controller/Student.controller';
import { StudentService } from './Student/service/Student.service';

import { Teacher, TeacherSchema } from './Teacher/schemas/Teacher.schemas';
import { TeacherController } from './Teacher/controller/Teacher.controller';
import { TeacherService } from './Teacher/service/Teacher.service';

import { Subject, SubjectSchema } from './Subject/schemas/Subject.schemas';
import { SubjectController } from './Subject/controller/Subject.controller';
import { SubjectService } from './Subject/service/Subject.service';
import { ConfigModule } from '@nestjs/config';


import { MainModule } from './Main/Main.module';


import { Registration, RegistrationSchema } from './Registration/schemas/Registration.schemas';

import { Teach, TeachSchema } from './Teach/schemas/Teach.schemas';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://warat:cskmutnb.ac.th@cluster0.cixg9.mongodb.net/test',
    ),
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
    MongooseModule.forFeature([{ name: Registration.name, schema: RegistrationSchema}]),
    MongooseModule.forFeature([{ name: Teach.name, schema: TeachSchema}])
  ],
  controllers: [
    AppController,
    MainController,
    StudentController,
    SubjectController,
    TeacherController
  ],
  providers: [AppService, StudentService, TeacherService, SubjectService, RegistrationService , TeachService],
})
export class AppModule {}

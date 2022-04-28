import { AuthService } from './../Authentication/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/Authentication/auth.module';
import { MainController } from './controller/Main.controller';
import { Module } from "@nestjs/common";
import { StudentService } from "src/Student/service/Student.service";
import { SubjectService } from "src/Subject/service/Subject.service";
import { TeacherService } from "src/Teacher/service/Teacher.service";

@Module({
    imports: [],
    controllers:[MainController],
    providers: [StudentService, TeacherService, SubjectService,AuthService],
  })
  export class MainModule {}
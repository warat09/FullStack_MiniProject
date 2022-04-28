import { JwtStrategy } from './../Authentication/jwt.strategy';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './schemas/Student.schemas';
import { StudentController } from './controller/Student.controller';
import { StudentService } from './service/Student.service';
import { AuthModule } from 'src/Authentication/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModel {}

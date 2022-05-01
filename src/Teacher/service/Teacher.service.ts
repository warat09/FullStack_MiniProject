import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher, TeacherDocument } from '../schemas/Teacher.schemas';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name) private TeacherModel: Model<TeacherDocument>,
  ) {}

  async createStudent(teacher: Teacher): Promise<Teacher> {
    const newStudent = new this.TeacherModel(teacher);
    return newStudent.save();
  }

  async findAll(): Promise<Teacher[]> {
    return this.TeacherModel.find().exec();
  }

  async LoginUserCheck(ID:string): Promise<Teacher|undefined|null>{
    let result:any;
    await this.TeacherModel.findOne({ Teacher_ID_Teacher: ID }).then(r => result=r);
    return result;
    // return this.UsersModel.findOne({Student_ID:student_ID});
  }
}

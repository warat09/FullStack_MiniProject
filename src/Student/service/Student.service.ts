import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from '../schemas/Student.schemas';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private UsersModel: Model<StudentDocument>,
  ) {}

  async createStudent(student: Student): Promise<Student> {
    const newStudent = new this.UsersModel(student);
    return newStudent.save();
  }
  async LoginUserCheck(student_ID:string): Promise<Student|undefined|null>{
    let result:any;
    await this.UsersModel.findOne({ Student_StuID: student_ID }).then(r => result=r);
    return result;
    // return this.UsersModel.findOne({Student_ID:student_ID});
  }
  async findAll(): Promise<Student[]> {
    return this.UsersModel.find().exec();
  }
}

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student,StudentDocument } from '../schemas/Student.schemas';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private UsersModel: Model<StudentDocument>) {}

  async createStudent(student:Student):Promise<Student>{
      const newStudent = new this.UsersModel(student)
      return newStudent.save()
  }

  async findAll(): Promise<Student[]> {
    return this.UsersModel.find().exec();
  }
}

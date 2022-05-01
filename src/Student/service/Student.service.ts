import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from '../schemas/Student.schemas';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private StudentModel: Model<StudentDocument>,
  ) {}

  async createStudent(student: Student): Promise<Student> {
    const newStudent = new this.StudentModel(student);
    return newStudent.save();
  }
  async LoginUserCheck(student_ID:string): Promise<Student|undefined|null>{
    let result:any;
    await this.StudentModel.findOne({ Student_ID_Student: student_ID }).then(r => result=r);
    return result;
    // return this.UsersModel.findOne({Student_ID:student_ID});
  }
  async findAll(): Promise<Student[]> {
    return this.StudentModel.find().exec();
  }
  async UpdateYearALL(year:string):Promise<Student[]>{
    const updateData={
      Student_Year:year,
      Student_Section:"DA"
    }
    return this.StudentModel.find().then((result)=>
    {
      result.forEach(res=>
      {
        res.set(updateData);
        return res.save();
      })
      return result;
    })
  }

  async getStudentData(id:string):Promise<Student>
  {
    return this.StudentModel.findOne({Student_ID_Student:id});
  }
}

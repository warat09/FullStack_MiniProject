import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Subject, SubjectDocument } from '../schemas/Subject.schemas';
@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject.name) private SubjectsModel: Model<SubjectDocument>,
  ) {}

  async createSubject(subject: Subject): Promise<Subject> {
    const newSubject = new this.SubjectsModel(subject);
    return newSubject.save();
  }

  async findAll(): Promise<Subject[]> {
    return this.SubjectsModel.find().exec();
  }
  
  async findReqFromID(Sub_ID:string): Promise<Array<string>>
  {
    const result:Subject = await this.SubjectsModel.findOne({Subject_ID:Sub_ID});
    return result.Requirement_Subject
  }
  
  async findSubjectByID(Sub_ID:string):Promise<Subject>{
    return this.SubjectsModel.findOne({Subject_ID:Sub_ID});
  }
}

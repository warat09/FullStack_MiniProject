import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teach , TeachDocument } from '../schemas/Teach.schemas';
@Injectable()
export class TeachService {
    constructor(
        @InjectModel(Teach.name) private TeachModel:Model<TeachDocument>
    ){}
    async createTeach(teach:Teach):Promise<Teach>{
        const Teach = new this.TeachModel(teach);
        return Teach.save()
    }
    async getTeach():Promise<Teach[]>
    {
        return this.TeachModel.find()
    }
    async AddStudentCount(subject_id:string,year:number,semester:string):Promise<boolean>
    {
        const current = await this.TeachModel.findOne({Subject_ID:subject_id,Teach_Year:year,Teach_Semester:semester});
        // console.log(subject_id,year,semester)
        if(current!=null)
        {
            current.set({Teach_Current_Student:current.Teach_Current_Student+=1})
            await current.save();
        }
        return true;
    }
    async getTeachByYearAndSec(year:number,sec:string,semester:string):Promise<Teach[]>
    {
        return this.TeachModel.find({Teach_Year:year,Teach_Section:sec,Teach_Semester:semester});
    }
    async getTeachBySubject_Year_SecNum(id:string,year:number,sec:string):Promise<Teach>
    {
        return this.TeachModel.findOne({Subject_ID:id,Teach_Year:year,Teach_Section_Num:sec})
    }
}
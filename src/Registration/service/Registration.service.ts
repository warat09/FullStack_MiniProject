import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Registration , RegistrationDocument } from '../schemas/Registration.schemas';
@Injectable()
export class RegistrationService {
    constructor(
        @InjectModel(Registration.name) private RegistrationModel:Model<RegistrationDocument>,
    ){}
    async createRegistration(regis:Registration):Promise<Registration>{
        const Registration = new this.RegistrationModel(regis);
        return Registration.save();
    }
    async getPassSubjectByID(student_ID:string): Promise<Array<string>>{
        return this.RegistrationModel.find({Student_StuID:student_ID}).then(result=>{
            const Data:Array<string>=[];
            result.forEach(res=>{
                const regex = new RegExp("^[A,B,C,D]$");
                if(regex.test(res.Registration_GPA))
                {
                    Data.push(res.Subject_ID);
                }
            })
            return(Data);
        })
    }
    // async getDropedSubject(student_ID:string,Year:number,Semester:string) : Promise<Registration[]>
    // {
    //     return this.RegistrationModel.find({Student_ID_Student:student_ID,Registration_Year:Year,Registration_Semester:Semester,Registration_GPA:"W"})
    // }
    async getAlreadyRegistDataByID(student_ID:string): Promise<Registration[]>
    {
        return this.RegistrationModel.find({Student_ID_Student:student_ID}).then(result=>{
            const Data:Registration[] = [];
            result.forEach(res=>{
                if(res.Registration_GPA==="")
                {
                    Data.push(res);
                }
            })
            return Data;
        })
    }
    async getAlreadyRegisByID(student_ID:string,year:number,semester:string): Promise<Array<string>>
    {
        return this.RegistrationModel.find({Student_ID_Student:student_ID}).then(result=>{
            const Data:Array<string>=[];
            result.forEach(res=>{
                if(res.Registration_GPA===""||(res.Registration_GPA==="W" && res.Registration_Year===year && res.Registration_Semester === semester))
                {
                    Data.push(res.Subject_ID);
                }
            })
            return(Data);
        })
    }
    async getAlreadyRegisByID_Year_Semester(ID:string,Year:number,Semester:string)
    {
        return this.RegistrationModel.find({Student_ID_Student:ID,Registration_Year:Year,Registration_Semester:Semester,Registration_GPA:{$not:/^W/}});
    }
    async getAlreadyRegisByID_Year_Semester_withDroped(ID:string,Year:number,Semester:string)
    {
        return this.RegistrationModel.find({Student_ID_Student:ID,Registration_Year:Year,Registration_Semester:Semester});
    }
    async DropSubject(STD_ID:string,SUB_ID:string,Year:number,Section:string,Semester:string)
    {
        const Subject = await this.RegistrationModel.findOne({Student_ID_Student:STD_ID,Subject_ID:SUB_ID,Registration_Year:Year,Registration_Section:Section,Registration_Semester:Semester})
        if(Subject!==null)
        {
            Subject.set({Registration_GPA:"W"})
            await Subject.save()
        }
        return Subject
    }
}
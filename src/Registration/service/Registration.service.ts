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
    async getAlreadyRegistDataByID(student_ID:string): Promise<Registration[]>
    {
        return this.RegistrationModel.find({Student_StuID:student_ID}).then(result=>{
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
    async getAlreadyRegisByID(student_ID:string): Promise<Array<string>>
    {
        return this.RegistrationModel.find({Student_StuID:student_ID}).then(result=>{
            const Data:Array<string>=[];
            result.forEach(res=>{
                if(res.Registration_GPA==="")
                {
                    Data.push(res.Subject_ID);
                }
            })
            return(Data);
        })
    }
}
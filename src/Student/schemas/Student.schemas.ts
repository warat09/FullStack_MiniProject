import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type StudentDocument = Student & Document

@Schema()
export class Student{
    
    @Prop()
    Student_ID: Number;

    @Prop()
    Student_StuID: Number;

    @Prop()
    Student_Name:String;

    @Prop()
    Student_Phone:String;

    @Prop()
    Student_Section:String;

    @Prop()
    Student_Year:Number;

    @Prop()
    Student_Semester:String;

    @Prop()
    Student_DOB:String;

}
export const StudentSchema = SchemaFactory.createForClass(Student)
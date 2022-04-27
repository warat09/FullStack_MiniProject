import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type TeacherDocument = Teacher & Document

@Schema()
export class Teacher{
    
    @Prop()
    Teacher_ID: Number;

    @Prop()
    Teacher_TeachID: Number;

    @Prop()
    Teacher_Name:String;

    @Prop()
    Teacher_DOB:String;

}
export const TeacherSchema = SchemaFactory.createForClass(Teacher)
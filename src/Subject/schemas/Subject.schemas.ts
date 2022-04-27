import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'

export type SubjectDocument = Subject & Document

@Schema()
export class Subject{
    
    @Prop()
    Subject_ID: Number;

    @Prop()
    Student_Des: String;
}
export const SubjectSchema = SchemaFactory.createForClass(Subject)
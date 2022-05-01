import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {

  @Prop()
  Subject_ID: string;

  @Prop()
  Subject_Name: string;

  @Prop()
  Subject_Des: string;

  @Prop()
  Subject_Student_Year:number

  @Prop()
  Requirement_Subject: Array<string>

  
}
export const SubjectSchema = SchemaFactory.createForClass(Subject);

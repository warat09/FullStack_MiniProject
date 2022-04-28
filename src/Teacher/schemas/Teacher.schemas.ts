import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {
  @Prop()
  Teacher_ID: string;

  @Prop()
  Teacher_TeachID: string;

  @Prop()
  Teacher_Name: string;

  @Prop()
  Teacher_DOB: string;
}
export const TeacherSchema = SchemaFactory.createForClass(Teacher);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeacherDocument = Teacher & Document;

@Schema()
export class Teacher {
  @Prop()
  Teacher_ID: string;

  @Prop()
  Teacher_ID_Teacher: string;

  @Prop()
  Teacher_Password: string;

  @Prop()
  Teacher_Name: string;

  @Prop()
  Teacher_Sur_Name: string;

  @Prop()
  Teacher_DOB: string;
}
export const TeacherSchema = SchemaFactory.createForClass(Teacher);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student {
  @Prop()
  Student_ID: string;

  @Prop()
  Student_StuID: string;

  @Prop()
  Student_Name: string;

  @Prop()
  Student_Phone: string;

  @Prop()
  Student_Section: string;

  @Prop()
  Student_Year: number;

  @Prop()
  Student_Semester: string;

  @Prop()
  Student_DOB: string;
}
export const StudentSchema = SchemaFactory.createForClass(Student);

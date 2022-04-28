import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubjectDocument = Subject & Document;

@Schema()
export class Subject {
  @Prop()
  Subject_ID: string;

  @Prop()
  Student_Des: string;
}
export const SubjectSchema = SchemaFactory.createForClass(Subject);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeachDocument = Teach & Document;

@Schema()
export class Teach {
    @Prop()
    Subject_ID: string;

    @Prop()
    Teach_ID: string;

    @Prop()
    Teach_Year: number

    @Prop()
    Teach_Semester: string;

    @Prop()
    Teach_Section: string;

    @Prop()
    Teach_Section_Num: string;

    @Prop()
    Teach_Date: string;
    
    @Prop()
    Teach_Time: string;
    
    @Prop()
    Exam_Date: string;

    @Prop()
    Exam_Time: string;
    
    @Prop()
    Teach_Max_Student: number;

    @Prop()
    Teach_Current_Student : number;

}

export const TeachSchema = SchemaFactory.createForClass(Teach);
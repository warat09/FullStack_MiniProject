import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RegistrationDocument = Registration & Document;

@Schema()
export class Registration {
    @Prop()
    Subject_ID: string;

    @Prop()
    Student_ID_Student: string;

    @Prop()
    Registration_Year: number;

    @Prop()
    Registration_Semester: string;

    @Prop()
    Registration_Paid: string;

    @Prop()
    Registration_GPA: string;

    @Prop()
    Registration_Section: string;
}
export const RegistrationSchema = SchemaFactory.createForClass(Registration);
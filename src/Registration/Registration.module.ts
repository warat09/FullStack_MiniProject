import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegistrationSchema } from './schemas/Registration.schemas';
@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Registration', schema: RegistrationSchema }]),
    ],
    controllers: [],
    providers: [],
  })
export class RegistrationModel {}
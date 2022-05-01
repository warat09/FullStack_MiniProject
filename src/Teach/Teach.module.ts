import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeachSchema } from './schemas/Teach.schemas';
@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Teach', schema: TeachSchema }]),
    ],
    controllers: [],
    providers: [],
  })
export class RegistrationModel {}
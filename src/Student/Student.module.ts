import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { StudentSchema } from "./schemas/Student.schemas";
import { StudentController } from "./controller/Student.controller";
import { StudentService } from "./service/Student.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Student',schema:StudentSchema}])],
    controllers:[StudentController],
    providers:[StudentService]
})
export class StudentModel{}
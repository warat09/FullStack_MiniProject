import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
// import { StudentSchema } from "./schemas/Student.schemas";
// import { StudentController } from "./controller/Student.controller";
// import { StudentService } from "./service/Student.service";
import { TeacherSchema } from "./schemas/Teacher.schemas";
import { TeacherController } from "./controller/Teacher.controller";
import { TeacherService } from "./service/Teacher.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Teacher',schema:TeacherSchema}])],
    controllers:[TeacherController],
    providers:[TeacherService]
})
export class TeacherModel{}
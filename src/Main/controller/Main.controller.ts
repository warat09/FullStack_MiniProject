import { AuthService } from './../../Authentication/auth.service';
import { Teacher } from './../../Teacher/schemas/Teacher.schemas';
import { TeacherService } from './../../Teacher/service/Teacher.service';
import { JwtAuthGuard } from './../../Authentication/jwt-auth.guard';
import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { Student } from '../../Student/schemas/Student.schemas';
import { StudentService } from '../../Student/service/Student.service';
import { Request } from 'express';




@Controller('Main')
export class MainController {
  constructor(
    private readonly StudentService: StudentService,
    private readonly TeacherService: TeacherService,
    private readonly AuthService:AuthService
    ) {}

  @Post("/login")
  async Login(@Req() req:Request) {
    const Id:string = req.body.ID;
    const Password:string = req.body.Password;
    const resultSTU:Student = await this.StudentService.LoginUserCheck(Id);
    const resultTEACH:Teacher = await this.TeacherService.LoginUserCheck(Id);
    let LoginType:any = "";
    if(resultSTU!==null)
    {
      LoginType = "Student";
    }
    else if(resultTEACH!==null)
    {
      LoginType = "Teacher";
    }
    else
    {
      return {message:"invalid ID"};
    }
    switch(LoginType)
    {
      case "Student":{
        if(Password===resultSTU.Student_ID)
        {
          const payload = {username:resultSTU.Student_StuID.toString()+resultSTU.Student_ID,sub:resultSTU.Student_Name}
          console.log("Student");
          return {
            message:"Login success!!",
            Token:await this.AuthService.login(payload),
            User_Name:resultSTU.Student_Name,
            User_Phone:resultSTU.Student_Phone,
            User_ID:resultSTU.Student_ID,
            USer_ID_2:resultSTU.Student_StuID};
        }
        else
        {
          return {message:"invalid Password"}
        }
        break;
      }
      case "Teacher":{
        if(Password===resultTEACH.Teacher_ID)
        {
          const payload = {username:resultTEACH.Teacher_TeachID.toString()+resultTEACH.Teacher_ID.toString(),sub:resultTEACH.Teacher_Name}
          // return {message:"Login success!!",Token:this.jwtService.sign(payload)};
          console.log("Teachers")
          return {
            message:"Login success!!",
            Token:await this.AuthService.login(payload),
            User_Email:resultTEACH.Teacher_Name
          };
        }
        else
        {
          return {message:"invalid Password"}
        }
        break;
      }
    }
  }
}

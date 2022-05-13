import { Teach } from './../../Teach/schemas/Teach.schemas';
import { Registration } from './../../Registration/schemas/Registration.schemas';
import { TeachService } from './../../Teach/service/Teach.service';
import { RegistrationService } from './../../Registration/service/Registration.service';
import { SubjectService } from 'src/Subject/service/Subject.service';
import { AuthService } from './../../Authentication/auth.service';
import { Teacher } from './../../Teacher/schemas/Teacher.schemas';
import { TeacherService } from './../../Teacher/service/Teacher.service';
import { JwtAuthGuard } from './../../Authentication/jwt-auth.guard';
import { Body, Controller, Get, Post, UseGuards, Req, Patch, Param } from '@nestjs/common';
import { Student } from '../../Student/schemas/Student.schemas';
import { StudentService } from '../../Student/service/Student.service';
import { Request } from 'express';
import { Subject } from 'src/Subject/schemas/Subject.schemas';
import * as bcrypt from 'bcrypt';

@Controller('Main')
export class MainController {
  private currentYear:Date;
  private currentSemester:string;
  constructor(
    private readonly StudentService: StudentService,
    private readonly TeacherService: TeacherService,
    private readonly SubjectService:  SubjectService,
    private readonly RegistrationService: RegistrationService,
    private readonly TeachService: TeachService,
    private readonly AuthService:AuthService,
    ) {
      this.currentYear = new Date();
      this.currentSemester = "1";
    }
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
        if(await bcrypt.compare(Password,resultSTU.Student_Password))
        {
          const payload = {user_ID:resultSTU.Student_ID_Student.toString()+resultSTU.Student_ID,Name:resultSTU.Student_Name+resultSTU.Student_Sur_Name}
          console.log("Student");
          return {
            Type:"Student",
            message:"Login success!!",
            Token:await this.AuthService.GetToken(payload),
            User_Name:resultSTU.Student_Name,
            User_Phone:resultSTU.Student_Phone,
            User_ID:resultSTU.Student_ID,
            User_ID_2:resultSTU.Student_ID_Student,
            User_Year:resultSTU.Student_Year};
        }
        else
        {
          return {message:"invalid Password"}
        }
        break;
      }
      case "Teacher":{
        if(await bcrypt.compare(Password,resultTEACH.Teacher_Password))
        {
          const payload = {username:resultTEACH.Teacher_ID_Teacher.toString()+resultTEACH.Teacher_ID.toString(),sub:resultTEACH.Teacher_Name}
          // return {message:"Login success!!",Token:this.jwtService.sign(payload)};
          console.log("Teachers")
          return {
            Type:"Teachers",
            message:"Login success!!",
            Token:await this.AuthService.GetToken(payload),
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

  @UseGuards(JwtAuthGuard)
  @Get("/Tokencheck")
  async Tokencheck()
  {
    return {message:"PASS"};
  }

  @Get("/GetSubject")
  async GetSubject(@Req() req:Request)
  {
    return this.StudentService.findAll();
  }
  @Get("/AlreadyRegis/:id")
  async AlreadyRegis(@Param() params)
  {
    const AlreadyRegis = await this.RegistrationService.getAlreadyRegistDataByID(params.id);
    if(AlreadyRegis.length>0)
    {
      return {result:true};
    }
    return {result:false};
  }
  @Post("/AddRegistrationList/:id")
  async AddRegistrationList(@Body() listRegistration:any,@Param() params)
  {
    const AlreadyRegis = await this.RegistrationService.getAlreadyRegistDataByID(params.id);
    const DateChecker =[]
    const DateData = [];
    const result = [];
    for(const registed of AlreadyRegis)
    {
      DateChecker.push(await this.TeachService.getTeachBySubject_Year_Semester_SecNum(registed.Subject_ID,this.currentYear.getFullYear()+543,this.currentSemester,registed.Registration_Section));
    }
    for(const subject of listRegistration.Data)
    {
      DateData.push(await this.TeachService.getTeachBySubject_Year_Semester_SecNum(subject.Subject_ID,this.currentYear.getFullYear()+543,this.currentSemester,subject.Registration_Section));
    }
    for(const AddData of DateData)
    {
      for(const CheckData of DateChecker)
      {
        if(AddData.Teach_Date===CheckData.Teach_Date)
        {
          console.log("StudySameDay!!");
          if(AddData.Teach_Time === CheckData.Teach_Time)
          {
            return {result:"error",message:`${AddData.Subject_ID} And ${CheckData.Subject_ID} Study Same Day!!!!!!`,Subject:[AddData.Subject_ID,CheckData.Subject_ID]}
          }
        }
        if(AddData.Exam_Date===CheckData.Exam_Date)
        {
          console.log("StudySameDay!!");
          if(AddData.Exam_Time === CheckData.Exam_Time)
          {
            return {result:"error",message:`${AddData.Subject_ID} And ${CheckData.Subject_ID} Exam Same Day!!!!!!`,Subject:[AddData.Subject_ID,CheckData.Subject_ID]}
          }
        }
      }
    }
    for(const subject of listRegistration.Data)
    {
      await this.TeachService.AddStudentCount(subject.Subject_ID,this.currentYear.getFullYear()+543,this.currentSemester);
      const newRegistration:Registration={
        Subject_ID:subject.Subject_ID,
        Student_ID_Student:subject.Student_ID_Student,
        Registration_Year:this.currentYear.getFullYear()+543,
        Registration_Semester:"1",
        Registration_Paid:"N",
        Registration_GPA:"",
        Registration_Section:subject.Registration_Section
      }
      result.push(await this.RegistrationService.createRegistration(newRegistration))
    }
    return {result:"success",message:result};
  }
  @Post("/RegistrationList")
  async RegistrationList(@Body() listRegistration:any)
  {
    const result = [];
    const DateChecker = [];
    const currentSemester = "1";
    for(const subject of listRegistration.Data)
    {
      DateChecker.push(await this.TeachService.getTeachBySubject_Year_Semester_SecNum(subject.Subject_ID,this.currentYear.getFullYear()+543,this.currentSemester,subject.Registration_Section));
      // console.log(newRegistration)
      for(let i =0;i<DateChecker.length-1;i++)
      {
        if(DateChecker[i].Teach_Date===DateChecker[i+1].Teach_Date)
        {
          console.log("StudySameDay!!");
          if(DateChecker[i].Teach_Time === DateChecker[i+1].Teach_Time)
          {
            return {result:"error",message:`${DateChecker[i].Subject_ID} And ${DateChecker[i+1].Subject_ID} Study Same Day!!!!!!`,Subject:[DateChecker[i].Subject_ID,DateChecker[i+1].Subject_ID]}
          }
        }
        if(DateChecker[i].Exam_Date===DateChecker[i+1].Exam_Date)
        {
          console.log("StudySameDay!!");
          if(DateChecker[i].Exam_Time === DateChecker[i+1].Exam_Time)
          {
            return {result:"error",message:`${DateChecker[i].Subject_ID} And ${DateChecker[i+1].Subject_ID} Exam Same Day!!!!!!`,Subject:[DateChecker[i].Subject_ID,DateChecker[i+1].Subject_ID]}
          }
        }
      }
    }
    for(const subject of listRegistration.Data)
    {
      await this.TeachService.AddStudentCount(subject.Subject_ID,this.currentYear.getFullYear()+543,currentSemester);
      const newRegistration:Registration={
        Subject_ID:subject.Subject_ID,
        Student_ID_Student:subject.Student_ID_Student,
        Registration_Year:this.currentYear.getFullYear()+543,
        Registration_Semester:"1",
        Registration_Paid:"N",
        Registration_GPA:"",
        Registration_Section:subject.Registration_Section
      }
      result.push(await this.RegistrationService.createRegistration(newRegistration))
    }
    return {result:"success",message:result};
  }
  @Post("/Registration")
  async Registration(@Body() RegistrationDto: Registration)
  {
    await this.TeachService.AddStudentCount(RegistrationDto.Subject_ID,this.currentYear.getFullYear()+543,"1");
    const newRegistration:Registration={
      Subject_ID:RegistrationDto.Subject_ID,
      Student_ID_Student:RegistrationDto.Student_ID_Student,
      Registration_Year:this.currentYear.getFullYear()+543,
      Registration_Semester:"1",
      Registration_Paid:"N",
      Registration_GPA:"",
      Registration_Section:RegistrationDto.Registration_GPA
    }
    return this.RegistrationService.createRegistration(newRegistration)
  }
  @UseGuards(JwtAuthGuard)
  @Get("/AvailableSubject/:id")
  async GetAvailableSubject(@Param() params)
  {
    const SubjectResult:any = [];
    const Profile:Student =  await this.StudentService.getStudentData(params.id);
    const OpenSubject = await this.TeachService.getTeachByYearAndSec(this.currentYear.getFullYear()+543,Profile.Student_Section,this.currentSemester);
    const PassSubject = await this.RegistrationService.getPassSubjectByID(Profile.Student_ID_Student);
    const AlreadyRegis = await this.RegistrationService.getAlreadyRegisByID(Profile.Student_ID_Student,this.currentYear.getFullYear()+543,this.currentSemester);
    for(const Subject of OpenSubject)
    {
      const Req: Array<string> = await this.SubjectService.findReqFromID(Subject.Subject_ID);
      const check = new Array(Req.length).fill(false);
      for (let i = 0; i < Req.length; i++) {
        for (let j = 0; j < PassSubject.length; j++) {
          if (PassSubject[j] === Req[i]) {
            check[i] = true;
          }
        }
      }
      let Allcheck = true;
      for (let i = 0; i < Req.length; i++) {
        if (check[i] == false) {
          Allcheck = false;
        }
      }
      for(let i =0;i<AlreadyRegis.length;i++)
      {
        if(AlreadyRegis[i]===Subject.Subject_ID)
        {
          Allcheck = false;
        }
      }
      for(let i =0;i<PassSubject.length;i++)
      {
        if(PassSubject[i]===Subject.Subject_ID)
        {
          Allcheck = false;
        }
      }
      if (Allcheck&&(Subject.Teach_Max_Student>Subject.Teach_Current_Student)) {
        let data:any ;
        await this.SubjectService.findSubjectByID(Subject.Subject_ID).then(res=>{
          if(((this.currentYear.getFullYear()+543)-Profile.Student_Year)+1>=res.Subject_Student_Year)
          {
            let checkSection = false;
            let i = SubjectResult.length-1;
            for(i;i>=0;i--)
            {
              if(SubjectResult[i].Subject_ID=== res.Subject_ID){
                checkSection = true;
                break;
              }
            }
            if(checkSection)
            {
              SubjectResult[i].Subject_SectionList.push(Subject.Teach_Section_Num);
              SubjectResult[i].Subject_DateList.push(Subject.Teach_Date);
              SubjectResult[i].Subject_TimeList.push(Subject.Teach_Time);
            }
            else
            {
              data = {
                Subject_ID:res.Subject_ID,
                Subject_Name:res.Subject_Name,
                Subject_Des:res.Subject_Des,
                Subject_Section:Subject.Teach_Section_Num,
                Subject_SectionList:[Subject.Teach_Section_Num],
                Subject_Date:Subject.Teach_Date,
                Subject_DateList:[Subject.Teach_Date],
                Subject_Time:Subject.Teach_Time,
                Subject_TimeList:[Subject.Teach_Time],
                Subject_Checked:false
              }
              SubjectResult.push(data);
            }
          }
        });
      }
    }
    return {Result:SubjectResult}
  }

  @Post("/AddSubject")
  async addSubject2Teach(@Body() TeachDto: Teach)
  {
    const newOpenSubject:Teach = {
      Subject_ID:TeachDto.Subject_ID,
      Teach_ID:TeachDto.Teach_ID,
      Teach_Year:2565,
      Teach_Semester:"1",
      Teach_Section:TeachDto.Teach_Section,
      Teach_Section_Num:TeachDto.Teach_Section_Num,
      Teach_Date:TeachDto.Teach_Date,
      Teach_Time:TeachDto.Teach_Time,
      Exam_Date:TeachDto.Exam_Date,
      Exam_Time:TeachDto.Exam_Time,
      Teach_Max_Student:TeachDto.Teach_Max_Student,
      Teach_Current_Student:0
    }
    return this.TeachService.createTeach(newOpenSubject);
  }
  @Get("/Teach")
  async GetTeach()
  {
    return this.TeachService.getTeach();
  }
  @Patch("/UpdateYear")
  async UpdateYear(@Req() req:Request)
  {
    return this.StudentService.UpdateYearALL(req.body.year);
  }

  @Get("/GetSchedule/:id/:year/:semester")
  async GetSchedule(@Param() params)
  {
    const result:any = []
    const registedSubject = await this.RegistrationService.getAlreadyRegisByID_Year_Semester(params.id,params.year,params.semester);
    for(const subject of registedSubject)
    {
      const teach_Data = await this.TeachService.getTeachBySubject_Year_Semester_SecNum(subject.Subject_ID,subject.Registration_Year,subject.Registration_Semester,subject.Registration_Section);
      const teacher_Data = await this.TeacherService.getTeacherData(teach_Data.Teach_ID);
      const subject_Detail = await this.SubjectService.findSubjectByID(teach_Data.Subject_ID);
      result.push(
        {
          Subject_ID:subject_Detail.Subject_ID,
          Subject_Name:subject_Detail.Subject_Name,
          Subject_Des:subject_Detail.Subject_Des,
          Subject_Year:subject_Detail.Subject_Student_Year,
          Teacher_ID_Teacher:teacher_Data.Teacher_ID_Teacher,
          Teacher_Name:teacher_Data.Teacher_Name,
          Teacher_Sur_Name:teacher_Data.Teacher_Sur_Name,
          Subject_Section_Num:subject.Registration_Section,
          Teach_Date:teach_Data.Teach_Date,
          Teach_Time:teach_Data.Teach_Time,
          Exam_Date:teach_Data.Exam_Date,
          Exam_Time:teach_Data.Exam_Time,
          Registration_GPA:subject.Registration_GPA,
          Subject_Checked:false
        }
      )
    }
    return result;
  }
  @Get("/GetRegistrationResult/:id/:year/:semester")
  async GetRegistrationResult(@Param() params)
  {
    const result:any = []
    const registedSubject = await this.RegistrationService.getAlreadyRegisByID_Year_Semester_withDroped(params.id,params.year,params.semester);
    for(const subject of registedSubject)
    {
      const teach_Data = await this.TeachService.getTeachBySubject_Year_Semester_SecNum(subject.Subject_ID,subject.Registration_Year,subject.Registration_Semester,subject.Registration_Section);
      const teacher_Data = await this.TeacherService.getTeacherData(teach_Data.Teach_ID);
      const subject_Detail = await this.SubjectService.findSubjectByID(teach_Data.Subject_ID);
      result.push(
        {
          Subject_ID:subject_Detail.Subject_ID,
          Subject_Name:subject_Detail.Subject_Name,
          Subject_Des:subject_Detail.Subject_Des,
          Subject_Year:subject_Detail.Subject_Student_Year,
          Teacher_ID_Teacher:teacher_Data.Teacher_ID_Teacher,
          Teacher_Name:teacher_Data.Teacher_Name,
          Teacher_Sur_Name:teacher_Data.Teacher_Sur_Name,
          Subject_Section_Num:subject.Registration_Section,
          Teach_Date:teach_Data.Teach_Date,
          Teach_Time:teach_Data.Teach_Time,
          Exam_Date:teach_Data.Exam_Date,
          Exam_Time:teach_Data.Exam_Time,
          Registration_Paid:subject.Registration_Paid,
          Registration_GPA:subject.Registration_GPA,
          Subject_Checked:false
        }
      )
    }
    return result;
  }
  @Patch("/DropSubject")
  async DropSubject(@Body() regisDto: any)
  {
    const result = [];
    for(const Subject of regisDto.Data)
    {
      
      const data = await this.RegistrationService.DropSubject(Subject.Student_ID_Student,Subject.Subject_ID,Subject.Registration_Year,Subject.Registration_Section,Subject.Registration_Semester);
      if(data!==null)
      {
        result.push(data)
      }
    }
    return result
  }

}

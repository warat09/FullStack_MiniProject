import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user:any;
  public register:any;
  login_form:FormGroup;
  regis_Student_form:FormGroup;
  regis_Teacher_form:FormGroup;
  regis_Subject_form:FormGroup;
  regis_Teach_form:FormGroup;
  regis_Registration_form:FormGroup
  constructor(private http:HttpClient,private fb:FormBuilder)
  {
    this.user = null;
    this.register = null;
    this.login_form = this.fb.group(
      {
        User_Name:["6204062616251"],
        User_Password:["12345678"],
      }
    )
    this.regis_Student_form = this.fb.group(
      {
        Student_ID:[""],
        Student_ID_Student:[""],
        Student_Name:[""],
        Student_Sur_Name:[""],
        Student_Phone:[""],
        Student_Section:[""],
        Student_DOB:[""],
      }
    )
    this.regis_Teacher_form = this.fb.group(
      {
        Teacher_ID:[""],
        Teacher_ID_Teacher:[""],
        Teacher_Password:[""],
        Teacher_Name:[""],
        Teacher_Sur_Name:[""],
        Teacher_DOB:[""],
      }
    )
    this.regis_Subject_form = this.fb.group(
      {
        Subject_ID:[""],
        Subject_Name:[""],
        Subject_Des:[""],
        Subject_Student_Year:[""],
        Requirement_Subject:[""]
      }
    )
    this.regis_Teach_form = this.fb.group(
      {
        Subject_ID:[""],
        Teach_ID:[""],
        Teach_Section:[""],
        Teach_Section_Num:[""],
        Teach_Date:[""],
        Teach_Time:[""],
        Exam_Date:[""],
        Exam_Time:[""],
        Teach_Max_Student:[0],
      }
    )
    this.regis_Registration_form = this.fb.group(
      {
        Subject_ID:[""],
        Student_ID_Student:[""],
        Registration_Section:[""]
      }
    )
  }
  onSubmitAddStudent(f:FormGroup):void{
    this.http.post("http://localhost:9090/Students",{
      Student_ID:f.get("Student_ID")?.value,
      Student_ID_Student:f.get("Student_ID_Student")?.value,
      Student_Name:f.get("Student_Name")?.value,
      Student_Sur_Name:f.get("Student_Sur_Name")?.value,
      Student_Phone:f.get("Student_Phone")?.value,
      Student_Section:f.get("Student_Section")?.value,
      Student_DOB:f.get(" Student_DOB")?.value,
    }).subscribe(res=>console.log(res));
  }
  onSubmitAddTeacher(f:FormGroup):void{
    this.http.post("http://localhost:9090/Teachers",{
      Teacher_ID:f.get("Teacher_ID")?.value,
      Teacher_ID_Teacher:f.get("Teacher_ID_Teacher")?.value,
      Teacher_Password:f.get("Teacher_Password")?.value,
      Teacher_Name:f.get("Teacher_Name")?.value,
      Teacher_Sur_Name:f.get("Teacher_Sur_Name")?.value,
      Teacher_DOB:f.get("Teacher_DOB")?.value,
    }).subscribe(res=>console.log(res));
  }
  onSubmitAddSubject(f:FormGroup):void{
    this.http.post("http://localhost:9090/Subjects",{
      Subject_ID:f.get("Subject_ID")?.value,
      Subject_Name:f.get("Subject_Name")?.value,
      Subject_Des:f.get("Subject_Des")?.value,
      Subject_Student_Year:f.get("Subject_Student_Year")?.value,
      Requirement_Subject:f.get("Requirement_Subject")?.value
    }).subscribe(res=>console.log(res));
  }
  onSubmitAddOpenSubject(f:FormGroup):void{
    this.http.post("http://localhost:9090/Main/AddSubject",{
      Subject_ID:f.get("Subject_ID")?.value,
      Teach_ID:f.get("Teach_ID")?.value,
      Teach_Section:f.get("Teach_Section")?.value,
      Teach_Section_Num:f.get("Teach_Section_Num")?.value,
      Teach_Date:f.get("Teach_Date")?.value,
      Teach_Time:f.get("Teach_Time")?.value,
      Exam_Date:f.get("Exam_Date")?.value,
      Exam_Time:f.get("Exam_Time")?.value,
      Teach_Max_Student:f.get("Teach_Max_Student")?.value,
    }).subscribe(res=>console.log(res));
  }
  onSubmitRegistrationArray():void{
    const result = [];
    // for(let i =0;i<this.register.Result.length;i++)
    // {
    //   if(this.register.)
    // }
    for(const Subject of this.register.Result)
    {
      if(Subject.Subject_Checked)
      {
        result.push({
          Subject_ID:Subject.Subject_ID,
          Student_ID_Student:this.user.User_ID_2,
          Registration_Section:Subject.Subject_Section
        })
      }
    }
    this.http.post("http://localhost:9090/Main/RegistrationList",{
      Data:result
    }).subscribe(res=>{
      const result:any = res;
      if(result.result === "error")
      {
        alert(result.message);
      }
      else
      {
        console.log(result.message);
      }
    })
  }
  onSubmitAddRegistration():void{
    const result = [];
    for(const Subject of this.register.Result)
    {
      if(Subject.Subject_Checked)
      {
        result.push({
          Subject_ID:Subject.Subject_ID,
          Student_ID_Student:this.user.User_ID_2,
          Registration_Section:Subject.Subject_Section
        })
      }
    }
    this.http.post(`http://localhost:9090/Main/AddRegistrationList/${this.user.User_ID_2}`,{
      Data:result
    }).subscribe(res=>{
      const result:any = res;
      if(result.result === "error")
      {
        alert(result.message);
      }
      else
      {
        console.log(result.message);
      }
    })
  }
  onSubmitRegistration(f:FormGroup):void{
    this.http.post("http://localhost:9090/Main/Registration",{
      Subject_ID:f.get("Subject_ID")?.value,
      Student_ID_Student:f.get("Student_ID_Student")?.value,
      Registration_Section:f.get("Registration_Section")?.value
    }).subscribe(res=>console.log(res))
  }
  onSubmitLogin(f:FormGroup):void{
    console.log(f.get("User_Name")?.value)
    this.http.post("http://localhost:9090/Main/login",{
      ID:f.get("User_Name")?.value,
      Password:f.get("User_Password")?.value
    }).subscribe(res=>{console.log(res); this.user = res});
  }
  onSubmitGetAvailableSubject():void{
    this.http.get(`http://localhost:9090/Main/AvailableSubject/${this.user.User_ID_2}`,{
    }).subscribe(res=>{console.log(res); this.register = res; console.log(this.register)});
  }
}

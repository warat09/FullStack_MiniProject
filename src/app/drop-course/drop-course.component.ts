import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-course',
  templateUrl: './drop-course.component.html',
  styleUrls: ['./drop-course.component.css']
})
export class DropCourseComponent implements OnInit {
  mydata:any;
  year:number;
  semester:string;
  currentSubject:any
  constructor(private http:HttpClient) {
    this.year = new Date().getFullYear()+543;
    this.semester = "1";
    this.mydata = (JSON.parse(localStorage.getItem('userData') || '{}'))
  }

  ngOnInit(): void {
    this.http.get<any>(`http://localhost:9090/Main/GetSchedule/${this.mydata.User_ID_2}/${this.year}/${this.semester}`,{
      headers:{Authorization: `Bearer ${this.mydata.Token}`}
    }).subscribe(
      res=>{this.currentSubject = res})
  }
  onSubmitDrop():void{
    const result = [];
    for(const Subject of this.currentSubject)
    {
      if(Subject.Subject_Checked)
      {
        console.log(Subject)
        result.push({
          Student_ID_Student:this.mydata.User_ID_2,
          Subject_ID:Subject.Subject_ID,
          Registration_Year:this.year,
          Registration_Semester:this.semester,
          Registration_Section:Subject.Subject_Section_Num
        })
      }
    }
    this.http.patch("http://localhost:9090/Main/DropSubject",{
      Data:result
    },{
      headers:{Authorization: `Bearer ${this.mydata.Token}`}
    }).subscribe(res=>{this.http.get<any>(`http://localhost:9090/Main/GetSchedule/${this.mydata.User_ID_2}/${this.year}/${this.semester}`,{
      headers:{Authorization: `Bearer ${this.mydata.Token}`}
    }).subscribe(
      res=>{this.currentSubject = res})})
  }
}

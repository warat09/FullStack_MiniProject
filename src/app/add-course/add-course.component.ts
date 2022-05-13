import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {


  mydata:any
  availableSubject:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.mydata = (JSON.parse(localStorage.getItem('userData') || '{}'))
    this.http.get<any>(`http://localhost:9090/Main/AlreadyRegis/${this.mydata.User_ID_2}`).subscribe(
      res=>{
        if(res.result)
        {
          this.http.get(`http://localhost:9090/Main/AvailableSubject/${this.mydata.User_ID_2}`,{
            headers:{Authorization: `Bearer ${this.mydata.Token}`}
          }).subscribe(res=>{this.availableSubject = res;});
        }
      }
    )
    // this.http.get(`http://localhost:9090/Main/AvailableSubject/${this.mydata.User_ID_2}`,{
    // }).subscribe(res=>{this.availableSubject = res;});
  }
  onSubmitAddRegistration():void{
    const result = [];
    for(const Subject of this.availableSubject.Result)
    {
      if(Subject.Subject_Checked)
      {
        result.push({
          Subject_ID:Subject.Subject_ID,
          Student_ID_Student:this.mydata.User_ID_2,
          Registration_Section:Subject.Subject_Section
        })
        console.log(result);
      }
    }
    this.http.post(`http://localhost:9090/Main/AddRegistrationList/${this.mydata.User_ID_2}`,{
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
  onsectionChange(sel:any,subject:any)
  {
    for(const section of this.availableSubject.Result)
    {
      if(section.Subject_ID===subject)
      {
        let count:number = 0;
        for(const section_num of section.Subject_SectionList)
        {
          if(section_num === sel)
          {
            section.Subject_Date = section.Subject_DateList[count];
            section.Subject_Time = section.Subject_TimeList[count];
            console.log(section.Subject_DateList[count])
          }
          count++;
        }
      }
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teach-add-grade',
  templateUrl: './teach-add-grade.component.html',
  styleUrls: ['./teach-add-grade.component.css']
})
export class TeachAddGradeComponent implements OnInit {
  mydata:any;
  Watch_Year:string;
  Watch_Year_list:Array<string>;
  Watch_Semester:string;
  Watch_Semester_list:Array<string>
  Grade_list:Array<string>
  result:any
  constructor(private http:HttpClient) {
    const currentYear = new Date().getFullYear()+543;
    this.result = [];
    this.mydata = (JSON.parse(localStorage.getItem('userData') || '{}'))
    this.Watch_Year_list = []
    this.Watch_Semester_list = ["1","2"];
    this.Grade_list = ["A","B","C","D","F"];
    this.Watch_Semester = "1"
    for(let i:number = currentYear as unknown as number ;i>=currentYear-5;i--)
    {
      this.Watch_Year_list.push(i.toString());
    };
    this.Watch_Year = this.Watch_Year_list[0];
  }

  ngOnInit(): void {
  }

  onSubmitYear():void{
    this.http.get<any>(`http://localhost:9090/Main/Get_Teach/${this.mydata.User_ID}/${this.Watch_Year}/${this.Watch_Semester}`,{
      headers:{Authorization: `Bearer ${this.mydata.Token}`}
    }).subscribe(
      res=>{this.result =res})
  }
  onSubmitUpdateData():void{
    console.log(this.result)
    this.http.patch('http://localhost:9090/Main/UpdateGrade',this.result,{
      headers:{Authorization: `Bearer ${this.mydata.Token}`}
    }).subscribe(
      res=>console.log(res)
    )
  }
}

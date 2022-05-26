import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  result:any;
  mydata:any;
  Watch_Year:string;
  Watch_Year_list:Array<string>;
  Watch_Semester:string;
  Watch_Semester_list:Array<string>
  constructor(private http:HttpClient) {
    const currentYear = new Date().getFullYear()+543;
    this.mydata = (JSON.parse(localStorage.getItem('userData') || '{}'))
    this.Watch_Year_list = []
    this.Watch_Semester_list = ["1","2"];
    this.Watch_Semester = "1"
    this.result =[];
    for(let i:number = currentYear as unknown as number ;i>=this.mydata.User_Year;i--)
    {
      this.Watch_Year_list.push(i.toString());
    };
    this.Watch_Year = this.Watch_Year_list[0];
  }

  ngOnInit(): void {

  }
  onSubmitYear():void{
    this.http.get<any>(`http://localhost:9090/Main/GetSchedule/${this.mydata.User_ID_2}/${this.Watch_Year}/${this.Watch_Semester}`,{
      headers:{Authorization: `Bearer ${this.mydata.Token}`}
    }).subscribe(
      res=>{this.result=res,console.log(res)})
  }
}

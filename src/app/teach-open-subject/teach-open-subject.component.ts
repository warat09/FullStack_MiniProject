import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teach-open-subject',
  templateUrl: './teach-open-subject.component.html',
  styleUrls: ['./teach-open-subject.component.css']
})
export class TeachOpenSubjectComponent implements OnInit {
  mydata:any;
  Subject_list:any;
  Time_Set:Array<string>;
  Section_Set:Array<string>
  Section_Num_Set:Array<string>
  Date_Set:Array<string>
  Subject_form:FormGroup;
  // Teach_Time:string;
  // Teach_Exam:string;
  // Subject_ID:string;
  constructor(private http:HttpClient,private fb:FormBuilder) {
    this.mydata = (JSON.parse(localStorage.getItem('userData') || '{}'))
    // this.Teach_Time="09.00-12.00"
    // this.Teach_Exam="09.00-12.00"
    this.Time_Set=["09.00-12.00","13.00-16.00","17.00-20.00"];
    this.Section_Set = ["DA","RA"];
    this.Section_Num_Set=["1","2","3","4","5"];
    // this.Subject_ID=""
    this.Date_Set=["1","2","3","4","5"];
    this.Subject_form = this.fb.group(
      {
        Teach_Date:["1"],
        Teach_Time:["09.00-12.00"],
        Exam_Date:[""],
        Exam_Time:["09.00-12.00"],
        Subject_ID:[""],
        Teach_Section:["DA"],
        Teach_Section_Num:["1"],
        Teach_Max_Student:[10],
      }
    )
    this.http.get<any>(`http://localhost:9090/Main/Get_Teach_Subject`).subscribe(
      res=>{
        this.Subject_list = res;
        this.Subject_form.get("Subject_ID")?.setValue(res[0].Subject_ID);
      }
    )
  }

  ngOnInit(): void {
  }

  onAddTeach(f:FormGroup)
  {
    this.http.post('http://localhost:9090/Main/AddTeach',{
      Teach_ID:this.mydata.User_ID,
      Teach_Date:f.get("Teach_Date")?.value,
      Teach_Time:f.get("Teach_Time")?.value,
      Exam_Date:f.get("Exam_Date")?.value,
      Exam_Time:f.get("Exam_Time")?.value,
      Subject_ID:f.get("Subject_ID")?.value,
      Teach_Section:f.get("Teach_Section")?.value,
      Teach_Section_Num:f.get("Teach_Section_Num")?.value,
      Teach_Max_Student:f.get("Teach_Max_Student")?.value,
    }).subscribe(res=>console.log(res))
  }
}

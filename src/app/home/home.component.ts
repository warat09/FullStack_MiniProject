import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mydata:any
  Username:any

  constructor(private http:HttpClient,private router: Router) {
  }

  ngOnInit(): void {
    this.mydata = (JSON.parse(localStorage.getItem('userData') || '{}'));
    console.log("test");
    if(Object.keys(this.mydata).length===0)
    {
      this.router.navigate([''])
    }
    this.Username = this.mydata.User_Name

    // console.log(this.mydata)
  }
  onLogout():void
  {
    localStorage.removeItem('userData');
    this.router.navigate([''])
  }
}

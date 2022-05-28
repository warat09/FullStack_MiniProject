import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  mydata:any
  Username:any
  public Type:any
  public current:any
  constructor(private http:HttpClient,public router: Router) {
    this.current = new Date().getFullYear()+543;
  }

  ngOnInit(): void {
    this.mydata = (JSON.parse(localStorage.getItem('userData') || '{}'));
    if(Object.keys(this.mydata).length===0)
    {
      this.router.navigate([''])
    }
    this.Username = this.mydata.User_Name
    this.Type = this.mydata.Type
    this.current-=(this.mydata.User_Year-1)
    console.log(this.router.url)
  }
  onLogout():void
  {
    localStorage.removeItem('userData');
    this.router.navigate([''])
  }
}

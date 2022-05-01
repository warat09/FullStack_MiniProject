import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mydata:any
  Username:any

  constructor() {
  }

  ngOnInit(): void {
    this.mydata = (JSON.parse(localStorage.getItem('userData') || '{}'));
    this.Username = this.mydata.User_Name

    console.log(this.mydata)
  }

}

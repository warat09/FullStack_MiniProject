import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  food = [
      {id:1,select:false,name:'123123'},
      {id:2,select:false,name:'123123'},
      {id:3,select:false,name:'123123'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeClick($event:any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    console.log(id,isChecked)

    this.food.map((d:any)=>{
      if(d.id == id){
        d.select = isChecked
        return d;
      }
    })
    console.log(this.food);
  }

}

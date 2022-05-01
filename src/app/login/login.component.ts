import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:any;
  login_form:FormGroup;


  constructor(private http:HttpClient,private fb:FormBuilder,private router: Router) { 
    this.user = null;

    this.login_form = this.fb.group(
      {
        User_Name:["6204062616251"],
        User_Password:["12345678"],
      }
    )
  }

  ngOnInit(): void {
  }
  onSubmitLogin(f:FormGroup):void{
    console.log(f.get("User_Name")?.value)
    this.http.post("http://localhost:9090/Main/login",{
      ID:f.get("User_Name")?.value,
      Password:f.get("User_Password")?.value
    }).subscribe(res=>{console.log(res); this.user = res;
      const User:any = res;
      if(User.message === "Login success!!"){
        if(User.Type === "Student"){
          localStorage.setItem('userData',JSON.stringify(res))
          this.router.navigate(['/Home'])
        }
        else{
          console.log("Teacher")
        }

      }
      else{
        console.log("No user")
      }
      
    });

  }
}

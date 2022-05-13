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
  private userData:any;

  constructor(private http:HttpClient,private fb:FormBuilder,private router: Router) {
    this.user = null;

    this.login_form = this.fb.group(
      {
        User_Name:[""],
        User_Password:[""],
      }
    )
  }

  ngOnInit(): void {
    if(localStorage.getItem("userData")!==null)
    {
      this.userData = JSON.parse(localStorage.getItem("userData")||"");
      this.login_form.get("User_Name")?.setValue(localStorage.getItem('User_Name'));
      // this.login_form
      this.http.get("http://localhost:9090/Main/Tokencheck",{
        headers:{Authorization: `Bearer ${this.userData.Token}`}
      }).subscribe(
        {
          next:(res)=>console.log(res),
          error:(err)=>{this.onTokenExpired();console.log(err)},
          complete:()=>{this.router.navigate(['/Home']);console.log("PASS")}
        }
      )
    }
    else
    {
      if(localStorage.getItem("User_Name")!==null)
      {
        this.login_form.get("User_Name")?.setValue(localStorage.getItem('User_Name'));
      }
    }
  }
  onTokenExpired()
  {
    this.login_form.get("User_Name")?.setValue(localStorage.getItem('User_Name'));
    this.login_form.get("User_Password")?.setValue("");
    localStorage.removeItem('userData');
  }
  onSubmitLogin(f:FormGroup):void{
    console.log(f.get("User_Name")?.value)
    this.http.post("http://localhost:9090/Main/login",{
      ID:f.get("User_Name")?.value,
      Password:f.get("User_Password")?.value
    }).subscribe((res:any)=>{console.log(res); this.user = res;
      const User:any = res;
      if(User.message === "Login success!!"){
        if(User.Type === "Student"){
          localStorage.setItem('userData',JSON.stringify(res))
          localStorage.setItem('User_Name',f.get("User_Name")?.value);
          console.log(localStorage.getItem('userData'))
          this.router.navigate(['/Home'])
        }
        else{
          console.log("Teacher")
        }

      }
      else{
        console.log(res.message)
      }

    });

  }
}

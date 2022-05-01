import { RegisterComponent } from '../register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from '../add-course/add-course.component';
import { ChangesectionComponent } from '../changesection/changesection.component';
import { DropCourseComponent } from '../drop-course/drop-course.component';
import { CheckRegisterComponent } from '../check-register/check-register.component';
import { GradeComponent } from '../grade/grade.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent,data:{title:'หน้าหลัก'},children:
[
  { path:'Register', component: RegisterComponent,data: {title: 'ลงวิชาเรียน'} },
  { path:'addCourse', component: AddCourseComponent,data: {title: 'เพิ่มวิชาเรียน'}},
  { path:'changeSection', component: ChangesectionComponent,data: {title: 'เปลี่ยนตอนเรียน'} },
  { path:'dropCourse', component: DropCourseComponent,data: {title: 'ถอนวิชาเรียน'}},
  { path:'checkRegister', component: CheckRegisterComponent,data: {title: 'ผลลงทะเบียน'}},
  { path:'grade', component: GradeComponent,data: {title: 'ผลการเรียน'}},
  { path:'schedule', component: ScheduleComponent,data: {title: 'ตารางสอน'}},
]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

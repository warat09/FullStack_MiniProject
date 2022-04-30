import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { ChangesectionComponent } from './changesection/changesection.component';
import { DropCourseComponent } from './drop-course/drop-course.component';
import { CheckRegisterComponent } from './check-register/check-register.component';
import { GradeComponent } from './grade/grade.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path:'Register', component: RegisterComponent },
  { path:'addCourse', component: AddCourseComponent},
  { path:'changeSection', component: ChangesectionComponent },
  { path:'dropCourse', component: DropCourseComponent},
  { path:'checkRegister', component: CheckRegisterComponent},
  { path:'grade', component: GradeComponent},
  { path:'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

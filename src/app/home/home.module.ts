import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { RegisterComponent } from '../register/register.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { ChangesectionComponent } from '../changesection/changesection.component';
import { DropCourseComponent } from '../drop-course/drop-course.component';
import { CheckRegisterComponent } from '../check-register/check-register.component';
import { GradeComponent } from '../grade/grade.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [
    RegisterComponent,
    AddCourseComponent,
    ChangesectionComponent,
    DropCourseComponent,
    CheckRegisterComponent,
    GradeComponent,
    ScheduleComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
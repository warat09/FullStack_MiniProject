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
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { TeachOpenSubjectComponent } from '../teach-open-subject/teach-open-subject.component';
import { TeachAddGradeComponent } from '../teach-add-grade/teach-add-grade.component';
import { TeachScheduleComponent } from '../teach-schedule/teach-schedule.component';
import { TeachWatchSubjectDataComponent } from '../teach-watch-subject-data/teach-watch-subject-data.component';



@NgModule({
  declarations: [
    RegisterComponent,
    AddCourseComponent,
    ChangesectionComponent,
    DropCourseComponent,
    CheckRegisterComponent,
    GradeComponent,
    ScheduleComponent,
    TeachOpenSubjectComponent,
    TeachWatchSubjectDataComponent,
    TeachScheduleComponent,
    TeachAddGradeComponent,
  ],
  exports:[
    RegisterComponent,
    AddCourseComponent,
    ChangesectionComponent,
    DropCourseComponent,
    CheckRegisterComponent,
    GradeComponent,
    ScheduleComponent,
    TeachOpenSubjectComponent,
    TeachWatchSubjectDataComponent,
    TeachScheduleComponent,
    TeachAddGradeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

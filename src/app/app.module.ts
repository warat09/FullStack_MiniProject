import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ChangesectionComponent } from './changesection/changesection.component';
import { DropCourseComponent } from './drop-course/drop-course.component';
import { CheckRegisterComponent } from './check-register/check-register.component';
import { GradeComponent } from './grade/grade.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AddCourseComponent,
    ChangesectionComponent,
    DropCourseComponent,
    CheckRegisterComponent,
    GradeComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

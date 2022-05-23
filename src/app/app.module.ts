import { HomeModule } from './home/home.module';
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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home/home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeachOpenSubjectComponent } from './teach-open-subject/teach-open-subject.component';
import { TeachWatchSubjectDataComponent } from './teach-watch-subject-data/teach-watch-subject-data.component';
import { TeachScheduleComponent } from './teach-schedule/teach-schedule.component';
import { TeachAddGradeComponent } from './teach-add-grade/teach-add-grade.component';
import { InstructionComponent } from './instruction/instruction.component';

@NgModule({
  declarations: [
    AppComponent,
    // RegisterComponent,
    // AddCourseComponent,
    // ChangesectionComponent,
    // DropCourseComponent,
    // CheckRegisterComponent,
    // GradeComponent,
    // ScheduleComponent,
    HomeComponent,
    LoginComponent,
    InstructionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

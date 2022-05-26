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

import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { DatePipe } from '@angular/common';


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
    ReactiveFormsModule,




    A11yModule,
    CdkAccordionModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "th-TH" },DatePipe],
})
export class HomeModule { }

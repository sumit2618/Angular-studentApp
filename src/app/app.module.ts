import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

import {ReactiveFormsModule} from '@angular/forms';
// for service registration
import {HttpClientModule} from '@angular/common/http';
import {StudentDataService} from './student-data.service';
import { DataService } from "./data.service";
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationComponent,
    StudentDashboardComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

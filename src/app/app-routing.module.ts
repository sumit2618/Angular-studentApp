import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { UpdateStudentComponent } from "./update-student/update-student.component";
const routes: Routes = [
  {path:"",component:StudentDashboardComponent},
  {path:"reg", component:StudentRegistrationComponent},
  {path:"update/:id", component:UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

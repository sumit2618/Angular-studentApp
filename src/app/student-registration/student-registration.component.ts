import { Component, OnInit } from '@angular/core';
import { Student } from "./student";
import {FormGroup,FormControl, FormControlName, Validators, FormControlDirective} from '@angular/forms';
import { StudentDataService } from '../student-data.service';
import { DataService } from '../data.service';
import { Subscriber } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  form:FormGroup


  // register()
  // {
  //   //console.warn(this.form.value)
  //   if(this.form.status =='INVALID')
  //   {
  //     alert("All field must be field")
  //   }
  //   else{
  //     // below save data in json file using studentDataService obj of service
  //     // to use service we have to subscribe it(return data as response)
  //     this.studentDataService.saveData(this.form.value).subscribe((res)=>{
  //       alert("data saved successfully")
  //     })
  //     // in below as soon as user click on register then data get saved in student array(pushing data in array)
  //     //this.student.push(this.form.value);
  //   }

  // }

  register(){
    this.dataservice.saveData(this.form.value).subscribe((res)=>{
      alert("Data Saved Successfully...");
      this.router.navigateByUrl("/")
    });
  }

     graduation_stream:string[]=["Mech","CS","IT","EL"];


    constructor(private dataservice:DataService , private router:Router){}

     ngOnInit(): void {

       this.form = new FormGroup({
         student_name:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*")]),  // student_name,etc is the name of HTML control
         student_email:new FormControl("",Validators.required),
         student_age:new FormControl("",Validators.required),
         student_isGraduate:new FormControl("",Validators.required),
         student_branch:new FormControl(this.graduation_stream[0],Validators.required)
     })
    }
}


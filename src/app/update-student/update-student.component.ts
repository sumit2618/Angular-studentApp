import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormControlName, Validators, FormControlDirective} from '@angular/forms';
import { StudentDataService } from '../student-data.service';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

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
  id:number
  student:any=[];

  register(){
    this.dataservice.updateData(this.id,this.form.value).subscribe((res)=>{
      alert("Data Updated Successfully...");
      this.router.navigateByUrl("/")
    });
  }

     graduation_stream:string[]=["Mech","CS","IT","EL"];


    constructor(private dataservice:DataService, private activatedroute:ActivatedRoute, private router:Router){}
    ngOnInit(): void {

      this.activatedroute.params.subscribe((param)=>{
        this.id = param["id"]
        this.dataservice.getDataById(this.id).subscribe((data)=>{
          this.student = data
          this.form = new FormGroup(
            {
              student_name:new FormControl(this.student.student_name),  // student_name,etc is the name of HTML control
              student_email:new FormControl(this.student.student_email),
              student_age:new FormControl(this.student.student_age),
              student_isGraduate:new FormControl(this.student.student_isGraduate),
              student_branch:new FormControl(this.student.student_branch)
            }
          )
        })
      })
    }
}

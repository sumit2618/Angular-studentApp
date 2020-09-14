import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private dataservece:DataService) { }
  student:any=[];

  getStudentData(){
    this.dataservece.getData().subscribe((res)=>{
      this.student=res;
    })
  }

  delete(id){
    this.dataservece.deleteData(id).subscribe((res)=>{
      alert("Data Deleted Successfully!!!!")
      this.getStudentData()
    });
  }

  ngOnInit(): void {
    this.getStudentData();
  }
}

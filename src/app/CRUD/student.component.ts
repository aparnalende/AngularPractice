import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  studroll: number;
  studName: string;
  course: string;
  email: string;
  student: any = [];
  isAddStudent: boolean = true;
  isEditStudent: boolean = false;
  isSelectedStudent:number=0;
  constructor() {
    this.studroll = 0;
    this.studName = '';
    this.course = '';
    this.email = '';
  }

  AddStudent(): void {
    this.isAddStudent = true;
    this.student.push({
      studroll: this.studroll,
      studName: this.studName,
      course: this.course,
      email: this.email,
    });
    this.studroll = 0;
    this.studName = '';
    this.course = '';
    this.email = '';
    console.log(this.student.length);
  }

  removeStudent(i:number): void {this.student.splice(i,1);}

  editStudent=(i:number)=>{
    this.isEditStudent=true;
    this.isAddStudent=false;
    this.isSelectedStudent=i;
    this.studroll=this.student[i].studroll;
    this.studName=this.student[i].studName;
    this.course=this.student[i].course;
    this.email=this.student[i].email;
  }
  updateStudent=()=>{
    this.isEditStudent=false;
    this.isAddStudent=true;
    this.student[this.isSelectedStudent].studroll=this.studroll;
    this.student[this.isSelectedStudent].studName=this.studName;
    this.student[this.isSelectedStudent].course=this.course;
    this.student[this.isSelectedStudent].email=this.email;

    this.studroll=0;
    this.studName="";
    this.course="";
    this.email=""
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentinfo',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css'],
})
export class StudentinfoComponent {
  sid: number;
  sname: string;
  social: number;
  maths: number;
  science: number;
  english: number;
  hindi: number;
  it: number;
  total: number;
  percentage: number;
  // grade:string="";

  constructor(
  ) {
    this.sid = 0;
    this.sname = "";
    this.social = 0;
    this.maths = 0;
    this.science = 0;
    this.english = 0;
    this.hindi = 0;
    this.it = 0;
    this.total=0;
    this.percentage=0;
  }

  result(): void {
    this.total =
      this.social +
      this.maths +
      this.science +
      this.english +
      this.hindi +
      this.it;
    this.percentage = this.total/600*100;
  }
}

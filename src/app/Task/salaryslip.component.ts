import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salaryslip',
  templateUrl: './salaryslip.component.html',
  styleUrls: ['./salaryslip.component.css']
})
export class SalaryslipComponent {

  eid:number=0;
  ename:string="";
  esalary:number=0;
  hra:number=20;
  da:number=50;
  pf:number=11;
  grossSal:number=0;
  calculateSalary():any{
    this.hra=(this.esalary*this.hra)/100;
    this.da=(this.esalary*this.da)/100;
    this.pf=(this.esalary*this.pf)/100
    this.grossSal=Math.round(this.esalary+this.hra+this.da-this.pf);
  }
 

}

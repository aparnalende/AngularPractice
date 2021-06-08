import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo1',
  templateUrl: './fordemo1.component.html',
  styleUrls: ['./fordemo1.component.css'],
})
export class FordemoComponent {
  employees: any[];
  constructor() {
    this.employees = [
      {
        code: 'emp1',
        name: 'aparna',
        gender: 'female',
        annualSalary: 80000,
        dateOfBirth: '13/07/1998',
        fullTimeStatus:true,
      },
      {
        code: 'emp2',
        name: 'rupali',
        gender: 'female',
        annualSalary: 80000,
        dateOfBirth: '20/12/1998',
        fullTimeStatus:false,
      },
      {
        code: 'emp3',
        name: 'suyog',
        gender: 'male',
        annualSalary: 50000,
        dateOfBirth: '13/07/1998',
        fullTimeStatus:true,
      },
      {
        code: 'emp4',
        name: 'neha',
        gender: 'female',
        annualSalary: 40000,
        dateOfBirth: '25/08/1998',
        fullTimeStatus:false,
      },
    ];
  }

  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }
}

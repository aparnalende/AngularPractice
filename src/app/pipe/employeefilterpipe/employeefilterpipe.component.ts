import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeefilterpipe',
  templateUrl: './employeefilterpipe.component.html',
  styleUrls: ['./employeefilterpipe.component.css'],
})
export class EmployeefilterpipeComponent {
  employees: any;
  searchText: string="";
  constructor() {
    this.employees = [
      {
        code: 'emp101',
        name: 'Tom',
        gender: 'Male',
        annualSalary: 5500,
        dateOfBirth: '25/6/1988',
        fulltime: true,
      },
      {
        code: 'emp102',
        name: 'Alex',
        gender: 'Male',
        annualSalary: 5700.95,
        dateOfBirth: '9/6/1982',
        fulltime: false,
      },
      {
        code: 'emp103',
        name: 'Mike',
        gender: 'Male',
        annualSalary: 5900,
        dateOfBirth: '12/8/1979',
        fulltime: true,
      },
      {
        code: 'emp104',
        name: 'Mary',
        gender: 'Female',
        annualSalary: 6500.826,
        dateOfBirth: '14/10/1980',
        fulltime: false,
      },
    ];
  }
}

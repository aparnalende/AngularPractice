import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childsearch',
  templateUrl: './childsearch.component.html',
  styleUrls: ['./childsearch.component.css'],
})
export class ChildsearchComponent {
  @Input() ename: string = '';

  @Output() public searchByName: EventEmitter<string> =
    new EventEmitter<string>();

  constructor() {
    this.ename = '';
  }

  ngOnInit(): void {
    console.log(this.ename);
  }
  employees:any = [
    {
      code: 'emp101',
      ename: 'Tom',
      gender: 'Male',
      annualSalary: 5500,
      dateOfBirth: '25/6/1988',
      fulltime: true,
    },
    {
      code: 'emp102',
      ename: 'Alex',
      gender: 'Male',
      annualSalary: 5700.95,
      dateOfBirth: '9/6/1982',
      fulltime: false,
    },
    {
      code: 'emp103',
      ename: 'Mike',
      gender: 'Male',
      annualSalary: 5900,
      dateOfBirth: '12/8/1979',
      fulltime: true,
    },
    {
      code: 'emp104',
      ename: 'Mary',
      gender: 'Female',
      annualSalary: 6500.826,
      dateOfBirth: '14/10/1980',
      fulltime: false,
    },
  ];

  msg: string = 'not found';
  searchName() {
    this.msg = 'Not Found';
    for (let i of this.employees) {
      if (i.ename === this.ename) {
        // this.msg = 'employee found';
        
        break;
      }
    }
    this.searchByName.emit(this.msg);
  }
}

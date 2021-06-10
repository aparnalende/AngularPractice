import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeserviceService } from './employeeservice.service';

@Component({
  selector: 'app-employeecrudservicedemo',
  templateUrl: './employeecrudservicedemo.component.html',
  styleUrls: ['./employeecrudservicedemo.component.css'],
  providers: [EmployeeserviceService],
})
export class EmployeecrudservicedemoComponent implements OnInit {
  value: any;

  employee: Employee[] = [];
  flag: boolean = false;
  Employee = {
    eid: '',
    firstname: '',
    lastname: '',
    salary: 0,
    department: '',
  };
  constructor(private empData: EmployeeserviceService) {}

  ngOnInit(): void {}

  addEmployee = (formValue: Employee) => {
    if (!this.flag) {
      this.value = formValue;
      this.empData.addEmployee(formValue);
      console.log(this.empData.employeeData);
      this.employee = this.empData.employeeData;
      console.log(this.employee);
    } else {
      this.flag = false;
      console.log('i am in update');
      console.log(formValue);
    }
  };

  removeEmployee = (i: any) => {
    this.empData.removeEmployee(i);
  };

  editEmployee = (i: any) => {
    this.flag = true;
    console.log('In edit method' + i);
    this.Employee = i;
  };

  UpdateEmployee = (updatedEmployee: any) => {
    // this.empData.UpdateEmployee();
    console.log('In onupdate method');
    console.log(updatedEmployee);
  };
}

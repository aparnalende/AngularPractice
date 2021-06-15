import { Injectable } from '@angular/core';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeserviceService {
  public employeeData: Employee[] = [];

  eid: string = '';
  firstname: string = '';
  lastname: string = '';
  salary: number = 0;
  department: string = '';

  isSelectedIndex: number = 0;
  public addEmployee = (emp: any): void => {
    this.employeeData.push(emp);
    console.log(this.employeeData);
    
    this.eid="";
    this.firstname="";
    this.lastname="";
    this.department="";
    this.salary=0;
  };

  public removeEmployee = (emp: Employee) => {
    let index = this.employeeData.indexOf(emp);
    this.employeeData.splice(index, 1);
  };

  public editEmployee = (i: any) => {
    this.isSelectedIndex = i;
    this.eid = this.employeeData[i].eid;
    this.firstname = this.employeeData[i].firstname;
    this.lastname = this.employeeData[i].lastname;
    this.salary = this.employeeData[i].salary;
    this.department = this.employeeData[i].department;
  };

  public UpdateEmployee = () => {
    this.employeeData[this.isSelectedIndex].eid = this.eid;
    this.employeeData[this.isSelectedIndex].firstname = this.firstname;
    this.employeeData[this.isSelectedIndex].lastname = this.lastname;
    this.employeeData[this.isSelectedIndex].department = this.department;
    this.employeeData[this.isSelectedIndex].salary = this.salary;

    this.eid="";
    this.firstname="";
    this.lastname="";
    this.department="";
    this.salary=0;
  };
}

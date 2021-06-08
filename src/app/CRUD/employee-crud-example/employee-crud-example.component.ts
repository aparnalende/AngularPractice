import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-crud-example',
  templateUrl: './employee-crud-example.component.html',
  styleUrls: ['./employee-crud-example.component.css'],
})
export class EmployeeCrudExampleComponent{
  id: number=0;
  ename: string="";
  dept: string="";
  salary: number=0;
  addr: string="";
  employees: any = [];
  selectedIndex: number = 0;
  isAdded: boolean = true;
  isEdited: boolean = false;
  searchText="";
  AddEmployee = () => {
    this.isAdded = true;
    this.employees.push({
      "id": this.id,
      "ename": this.ename,
      "dept": this.dept,
      "salary": this.salary,
      "addr": this.addr,
    });

    this.id = 0;
    this.ename = "";
    this.dept = "";
    this.salary = 0;
    this.addr = "";

    console.log(this.employees.length);
  };

  removeEmployee = (i: number) => {
    this.employees.splice(i, 1);
  };

  editEmployee = (i: number) => {
    this.isAdded = false;
    this.isEdited = true;
    this.selectedIndex = i;
    this.id = this.employees[i].id;
    this.ename = this.employees[i].ename;
    this.dept = this.employees[i].dept;
    this.salary = this.employees[i].salary;
    this.addr = this.employees[i].addr;
  };

  UpdateEmployee = () => {
    this.isEdited = false;
    this.isAdded = true;
    this.employees[this.selectedIndex].id = this.id;
    this.employees[this.selectedIndex].ename = this.ename;
    this.employees[this.selectedIndex].dept = this.dept;
    this.employees[this.selectedIndex].salary = this.salary;
    this.employees[this.selectedIndex].addr = this.addr;

    this.id = 0;
    this.ename = '';
    this.dept = '';
    this.salary = 0;
    this.addr = '';
  };
}

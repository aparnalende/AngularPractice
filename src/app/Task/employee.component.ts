import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
 employee:any=[
  {id:1,name:"Neha",email:"neha@gmail.com",dept:"IT"},
 ];
 
 emp:any={};
 id:number=this.employee.length;
 name:string="";
 email:string="";
 dept:string="";

 addEmployee():void{
   this.id++;
   this.employee.push({id:this.id,name:this.name,email:this.email,dept:this.dept});
   alert("record inserted");
 }
//  index:number=0;
//  deleteEmployee(index:number):void{
//    let c=confirm("Are you sure ,want to delete?")
//    if(c==true){
//      this.employee.spice(index,1)
//    }
//  }
}









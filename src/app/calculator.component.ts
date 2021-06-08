import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  num1:number=0;
  num2:number=0;

  addition:number=0;
  subtraction:number=0;
  multiplication:number=0;
  division:number=0;

  constructor() { 
    this.num1=this.num1;
    this.num2=this.num2;
  }

  add():number{
    this.addition=this.num1+this.num2;
    return this.addition;    
  }

  sub():number{
    this.subtraction=this.num1-this.num2;
    return this.subtraction;
  }

  mult():number{
    this.multiplication=this.num1*this.num2;
    return this.multiplication;
  }

  div():number{
    this.division=this.num1/this.num2;
    return this.division;
  }
}

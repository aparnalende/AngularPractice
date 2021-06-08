import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  firstName:string;
  gender:string;
  email:string;
  technology:string;
  constructor(){
      this.firstName="Aparna";
      this.gender="Female";
      this.email="aparna@gmail.com";
      this.technology="Java";
  }

}

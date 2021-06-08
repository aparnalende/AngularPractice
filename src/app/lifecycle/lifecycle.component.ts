import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  msg:string="";
  constructor() {
    this.msg="constructor loaded;"
   }

  ngOnInit(): void {
    this.msg+='Component initialized successfully...'
  }

}

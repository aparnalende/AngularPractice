import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  msg:string="Hello.... Angular";
  constructor() {
    this.msg=this.msg;
   }

   showMsg():void{
     this.msg="Angular is awesome!!"
   }

   hideMsg():void{
     this.msg=""
   }
  ngOnInit(): void {
  }

}

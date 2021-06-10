import { Component, OnInit } from '@angular/core';
import { CallserviceService } from './callservice.service';

@Component({
  selector: 'app-servicedemo',
  templateUrl: './servicedemo.component.html',
  styleUrls: ['./servicedemo.component.css'],
  providers:[CallserviceService]
})
export class ServicedemoComponent implements OnInit {

  msg:string="";
  constructor(private serObj:CallserviceService) { }

  ngOnInit(): void {
  }
  call():void{
    this.msg=this.serObj.sayHello();
  }

}

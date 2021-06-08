import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentsearch',
  templateUrl: './parentsearch.component.html',
  styleUrls: ['./parentsearch.component.css'],
})
export class ParentsearchComponent {
  ename: string = '';
  fromChild:string="";
  parentSearch(msg: string) {
   this.fromChild=msg;
  }
}

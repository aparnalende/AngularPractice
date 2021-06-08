import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class ComponentComponent {
  public xposition: number = 0;
  public buttonName: string = "";
  public btnClick(obj: any) {
    this.xposition = obj.clientX;
    this.buttonName = obj.target.name;
  }
}

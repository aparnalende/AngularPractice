import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-for-component',
  templateUrl: './template-for-component.component.html',
  styleUrls: ['./template-for-component.component.css']
})
export class TemplateForComponentComponent {

  public RegisterClick(obj:any){
    alert(obj.txtName);
}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent  {

  submitClick(values:any){
    alert(values.uname+'\n'+values.email+"\n"+values.city)
  }

}

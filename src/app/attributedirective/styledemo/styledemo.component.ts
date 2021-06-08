import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styledemo',
  templateUrl: './styledemo.component.html',
  styleUrls: ['./styledemo.component.css']
})
export class StyledemoComponent{

  public styleObject={
    'background-color':'darkcyan',
    'color':'white',
    'text-align':'center'
  };
  public bgcolor='';
  public forcolor='';
  public align='';

  public ApplyEffect(){
    this.styleObject={
      'background-color':this.bgcolor,
      'color':this.forcolor,
      'text-align':this.align
    }
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filterpanel',
  templateUrl: './filterpanel.component.html',
  styleUrls: ['./filterpanel.component.css'],
})
export class FilterpanelComponent {
  SelectedRadioValue = 'All';
  @Input() AllCount = 0;
  @Input() ElectronicsCount=0;
  @Input() FootwearCount=0;

  @Output() public FilterValueChanged:EventEmitter<string>=new EventEmitter<string>();
  RadioButtonChanged(){
    this.FilterValueChanged.emit(this.SelectedRadioValue);
  }
}

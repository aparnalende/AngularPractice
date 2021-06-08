import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-childcycle',
  templateUrl: './childcycle.component.html',
  styleUrls: ['./childcycle.component.css'],
})
export class ChildcycleComponent implements OnChanges {
  @Input() public username: string = '';
  currentvalue: any;
  previousvalue: any;

  ngOnChanges(changes: SimpleChanges) {
    for (var property in changes) {
      let change = changes[property];
      this.currentvalue = change.currentValue;
      this.previousvalue = change.previousValue;
    }
  }
}

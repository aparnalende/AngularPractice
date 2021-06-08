import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent {
product:{[key:number]:string}={1:'TV',2:'Mobile'};
public products=['TV','Mobile','Shoe'];

statusMessage = {
  'Hyderabad': 'Delivery in 2 days',
  'Delhi': 'Delivery in 5 days',
  'Mumbai': 'Not Deliverable'
};
productName = 'Samsung TV';
city = 'Mumbai';
}

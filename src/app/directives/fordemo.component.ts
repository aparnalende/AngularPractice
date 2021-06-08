import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrls: ['./fordemo.component.css'],
})
export class FordemoComponent {
  title: string = 'Product List';
  products: any = ['samsung TV', 'Mobile', 'Nike Shoe'];
  data: any = [
    {
      id: 1,
      name: 'TV',
      Price: 30000,
    },
    {
      id: 2,
      name: 'Fridge',
      Price: 40000,
    },
    {
      id: 1,
      name: 'rope',
      Price: 500,
    },
  ];

 
}

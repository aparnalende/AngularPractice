import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpipedemo',
  templateUrl: './productpipedemo.component.html',
  styleUrls: ['./productpipedemo.component.css'],
})
export class ProductpipedemoComponent {
  products: any;
  constructor() {
    this.products = [
      {
        pid: 101,
        pname: 'TV',
        price: 40000,
        qty: 5,
        discount:0
      },
      {
        pid: 102,
        pname: 'Fridge',
        price: 45000,
        qty: 10,
        discount:20
      },
      {
        pid: 103,
        pname: 'microwave',
        price: 25000,
        qty: 20,
        discount:0
      },
      {
        pid: 104,
        pname: 'Table',
        price: 40000,
        qty: 10,
        discount:15
      },
    ];
  }
}

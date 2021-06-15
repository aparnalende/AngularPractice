import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService,
    private location: Location
  ) {
    this.products = this.productService.getProducts();
    console.log(this.location.getState());
  }

  ngOnInit(): void {
    // this.products=this.productService.getProducts();
    // console.log(this.location.getState());
  }
}

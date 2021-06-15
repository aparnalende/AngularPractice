import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  template: `<h3>
    Overview of {{ product.name }}
    <h3></h3>
  </h3> `,
})
export class ProductOverviewComponent {
  product: Product | any;
  id: string;
  sub: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}

  ngOnInit() {
    this.sub = this._Activatedroute.parent?.params.subscribe((params) => {
      this.id = params['id'];
      let products = this._productService.getProducts();
      this.product = products.find((p) => p.id == this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

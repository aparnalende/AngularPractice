import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  product: Product | any;
  prolist: any;

  constructor(
    private actRoute: ActivatedRoute,
    private _router: Router,
    private _ProductService: ProductService,
    private location: Location
  ) {}
  ngOnInit(): void {
    let proId = this.actRoute.snapshot.params['id'];
    this.product = this._ProductService.getProducts();
    for (let i = 0; i < this.product.length; i++) {
      if (proId == this.product[i].id) {
        this.prolist = this.product[i];
      }
    }
  }

  onBack(): void {
    this._router.navigate(['product']);
  }


}

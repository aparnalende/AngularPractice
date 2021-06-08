import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterationdemo',
  templateUrl: './iterationdemo.component.html',
  styleUrls: ['./iterationdemo.component.css'],
})
export class IterationdemoComponent {
  public products = [
    { Name: 'Samsung TV', Photo: 'assets/tv.jpg', Likes: 0, Dislikes: 0 },
    { Name: 'Nike Casuals', Photo: 'assets/shoe.jpg', Likes: 0, Dislikes: 0 },
    { Name: 'Lee Boot', Photo: 'assets/shoe1.jpg', Likes: 0, Dislikes: 0 },
    { Name: 'Shirt', Photo: 'assets/shirt.jpg', Likes: 0, Dislikes: 0 },
  ];
  public LikesCounter(product: any) {
    product.Likes++;
  }
  public DislikesCounter(product: any) {
    product.Dislikes--;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productsdata',
  templateUrl: './productsdata.component.html',
  styleUrls: ['./productsdata.component.css'],
})
export class ProductsdataComponent {
  public data = [
    {
      Name: 'Samsung TV',
      Price: 45000.54,
      Category: 'Electronics',
      Photo: 'assets/tv.jpg',
    },
    {
      Name: 'Nike Casuals',
      Price: 5000.54,
      Category: 'Footwear',
      Photo: 'assets/nike.jpg',
    },
    {
      Name: 'Earpods',
      Price: 15000.54,
      Category: 'Electronics',
      Photo: 'assets/earpod.jpg',
    },
    {
      Name: 'Lee Cooper Boot',
      Price: 6000.54,
      Category: 'Footwear',
      Photo: 'assets/shoe1.jpg',
    },
  ];
  public AllCount = this.data.length;
  public ElectronicsCount = this.data.filter((x) => x.Category == 'Electronics')
    .length;
  public FootwearCount = this.data.filter((x) => x.Category == 'Footwear')
    .length;
  public CategoryName = 'All';
  public CategoryChanged(categoryName: string) {
    this.CategoryName = categoryName;
  }
}

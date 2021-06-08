import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterationandcondition',
  templateUrl: './iterationandcondition.component.html',
  styleUrls: ['./iterationandcondition.component.css'],
})
export class IterationandconditionComponent implements OnInit {
  public products = [
    { Name: 'Samsung TV', Price: 45000.55, Category: 'Electronics' },
    { Name: 'Nike Casuals', Price: 2300.44, Category: 'Footwear' },
    { Name: 'JBL Speaker', Price: 6300.44, Category: 'Electronics' },
    { Name: 'Lee Cooper Boot', Price: 4600.44, Category: 'Footwear' },
  ];
  public selectedCategory = 'All';

  ngOnInit(): void {}
}

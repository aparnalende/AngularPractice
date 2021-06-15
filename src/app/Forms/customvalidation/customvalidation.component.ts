import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customvalidation',
  templateUrl: './customvalidation.component.html',
  styleUrls: ['./customvalidation.component.css'],
})
export class CustomvalidationComponent {
  public showCityError = false;
  public showEvenError = false;
  public CityChanged(val: string) {
    if (val == 'nocity') {
      this.showCityError = true;
    } else {
      this.showCityError = false;
    }
  }

  public VerifyEvenNumber(val: number) {
    if (val % 2 == 0) {
      this.showEvenError = false;
    } else {
      this.showEvenError = true;
    }
  }
}

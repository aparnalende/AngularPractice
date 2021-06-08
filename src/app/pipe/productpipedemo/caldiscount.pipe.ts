import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caldiscount',
})
export class CaldiscountPipe implements PipeTransform {
  transform(price: number, discount: number): number {
    console.log('in calculation' + price);
    // if (discount == 0) {
    //   return price;
    // } else {
    //   return (price * discount) / 100;
    // }
    var price=price-((price*discount)/100);
    return price;
  }
}

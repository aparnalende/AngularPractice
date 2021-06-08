import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
})
export class MyfilterPipe implements PipeTransform {
  transform(employess: any[], searchText: string): any[] {
    console.log('in filter' + employess);
    if (!employess) return [];
    if (!searchText) return employess;
    searchText = searchText.toLowerCase();
    return employess.filter((it) => {
      console.log('in search');
      return it.name.toLowerCase().includes(searchText);
    });
  }
}

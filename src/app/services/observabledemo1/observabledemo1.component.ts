import { Component, OnInit } from '@angular/core';
import { observable, Observable, Observer, of, Subscription } from 'rxjs';
import {filter,map} from 'rxjs/operators';

@Component({
  selector: 'app-observabledemo1',
  template: `<h1>Check output of observable demo on console</h1>`,
  styleUrls: ['./observabledemo1.component.css'],
})
export class Observabledemo1Component{
  observable: Observable<string>;
  observer?: Observer<string>;

  subscription: Subscription;

  constructor(){

    this.observable = new Observable((observer: Observer<string>) => {
      this.observer = observer;
    });

    this.subscription = this.observable.subscribe(
      this.handleData,
      this.handleError,
      this.handleComplete
    );
  }

  ngOnInit() {
    this.observer?.next('12');
    this.observer?.next('15');
    this.observer?.next('16');
    this.observer?.error('An Error Occured!');
    this.observer?.complete();

    //RxJs operarator

    const squareOf2 = of(1, 2, 3, 4, 5, 6).pipe(
      filter((num:any) => num % 2 === 0),
      map((num:any) => num * num)
    );
    squareOf2.subscribe((num:any) => console.log(num));
  }

  handleData(data:any) {
    console.log('Here are the usable data', data);
    // Insert Business logic here
  }

  handleComplete() {
    console.log('Complete');
  }

  handleError(error:any) {
    console.log('error:', error);
    return Observable.throw(error);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-validationdemo',
  templateUrl: './validationdemo.component.html',
  styleUrls: ['./validationdemo.component.css'],
})
export class ValidationdemoComponent {
  userModal = new User();
  constructor() {}
  onSubmit() {
    alert(
      'Form submitted successfully!!!\n Check the values in browser console '
    );
    console.table(this.userModal);
  }
}

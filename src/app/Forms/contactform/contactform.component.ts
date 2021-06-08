import { Component, OnInit } from '@angular/core';
import { Contact } from './Contact';
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
})
export class ContactformComponent {
  value: any;
  contact: Contact = {
    firstName: 'aparna',
    lastName: 'lende',
    city: 'pune',
    street: 'near ganesh temple',
    pincode: '411412',
  };

  contactFormMethod(fvalue: any) {
    this.value = fvalue;
    console.log(fvalue);
  }
}

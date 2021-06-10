import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validateformdemo',
  templateUrl: './validateformdemo.component.html',
  styleUrls: ['./validateformdemo.component.css'],
})
export class ValidateformdemoComponent {
  value: any;

  log(contactForm:any) {
    this.value = contactForm;
    console.log(this.value);
    alert(contactForm)
  }
}

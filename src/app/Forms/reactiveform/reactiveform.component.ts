import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent {
  contactForm = new FormGroup({
    firstName: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(9),
      ])
    ),
    lastName: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    address: new FormGroup({
      city: new FormControl({
        city: new FormControl(),
        street: new FormControl(),
        pincode: new FormControl('', Validators.pattern('^[0-9]{6}$')),
      }),
    }),
  });

  onSubmit() {
    console.log(this.contactForm.value);
  }
}

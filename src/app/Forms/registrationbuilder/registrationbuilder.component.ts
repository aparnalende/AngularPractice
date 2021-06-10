import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrationbuilder',
  templateUrl: './registrationbuilder.component.html',
  styleUrls: ['./registrationbuilder.component.css'],
})
export class RegistrationbuilderComponent implements OnInit {
  registerForm : FormGroup=new FormGroup({});
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        dob: ['', [Validators.required]],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^\d{4}\-(0[1-9]}|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
            ),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      // {
      //   validator: MustMatch('password', 'confirmPassword'),
      // }
    );
  }
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert(
      `successfully done.`
    );
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

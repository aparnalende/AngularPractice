import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginbuilder',
  templateUrl: './loginbuilder.component.html',
  styleUrls: ['./loginbuilder.component.css'],
})
export class LoginbuilderComponent implements OnInit {
  logForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.logForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.email],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    let credentials = this.logForm.value;
    alert(JSON.stringify(credentials));
  }
}

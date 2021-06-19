import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-selectdemo',
  templateUrl: './selectdemo.component.html',
  styleUrls: ['./selectdemo.component.css'],
})
export class SelectdemoComponent {
  submitted = false;
  framework: any = ['Angular', 'DJango', 'Spring', 'Hibernate', 'SpringBoot'];
  constructor(private fb: FormBuilder) {}

  frameworkForm = this.fb.group({
    name: ['',[Validators.required]],
  });

  public handlerError = (controlName: string, errorName: string) => {
    {
      return this.frameworkForm.controls[controlName].hasError(errorName);
    }
  };

  onSubmit=()=>{
    this.submitted=true;
    alert(JSON.stringify(this.frameworkForm.value))
  }
}

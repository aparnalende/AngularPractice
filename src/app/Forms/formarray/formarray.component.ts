import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css'],
})
export class FormarrayComponent {
  angForm = new FormGroup({
    names: new FormArray([
      new FormControl('', Validators.required),
      new FormControl('', Validators.required),
    ]),
  });

  get names(): FormArray {
    console.log('in get()');
    return this.angForm.get('names') as FormArray;
  }

  onFormSubmit(): void {
    for (let i = 0; i < this.names.length; i++) {
      console.log(this.names.at(i).value);
    }
  }
  addNameField() {
    this.names.push(new FormControl('', Validators.required));
  }

  deleteNameField(index: number) {
    if (this.names.length !== 1) {
      this.names.removeAt(index);
    }
  }
}

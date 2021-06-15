import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarraydemo',
  templateUrl: './formarraydemo.component.html',
  styleUrls: ['./formarraydemo.component.css'],
})
export class FormarraydemoComponent implements OnInit {
  title = 'FormArray Example in Angular Reactive form';
  skillsForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }
  onSubmit() {
    console.log(this.skillsForm.value);
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

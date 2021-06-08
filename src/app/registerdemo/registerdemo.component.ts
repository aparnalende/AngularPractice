import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerdemo',
  templateUrl: './registerdemo.component.html',
  styleUrls: ['./registerdemo.component.css']
})
export class RegisterdemoComponent implements OnInit {

  public name="Register New User";
  constructor() { }

  ngOnInit(): void {
  }

}

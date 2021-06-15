import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginservService } from './loginserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //  isLogin:boolean=false;
  constructor(private myserv: LoginservService, private routes: Router) {}
  msg: string;
  ngOnInit(): void {}
  check(uname: string, p: string) {
    console.log('in check');
    var output = this.myserv.checkusernameandpassword(uname, p);
    if (output == true) {
      this.routes.navigate(['/dash-board']);
    } else {
      this.msg = 'Invalid username or password';
    }
  }
}

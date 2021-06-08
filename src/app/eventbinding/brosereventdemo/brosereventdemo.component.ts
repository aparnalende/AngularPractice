import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brosereventdemo',
  templateUrl: './brosereventdemo.component.html',
  styleUrls: ['./brosereventdemo.component.css'],
})
export class BrosereventdemoComponent {
  public users = [
    { UserName: 'aparna' },
    { UserName: 'rupali' },
    { UserName: 'shubha' },
    { UserName: 'neha' },
  ];
  username = '';
  password = '';
  msg = '';
  warndisplay = false;
  isValid = false;
  isInvalid = false;

  verifyUsername = () => {
    for (var user of this.users) {
      if (user.UserName == this.username) {
        this.msg = 'User name already taken-Try another';
        this.isInvalid = true;
        this.isValid = false;
      } else {
        this.msg = 'Username available';
        this.isValid = true;
        this.isInvalid = false;
      }
    }

    //  verifyPassword(e:any){
    //   if (e.keyCode >= 65 && e.keyCode <= 90) {
    //     this.warndisplay = true;
    //   } else {
    //     this.warndisplay = false;
    //   }
    // };
  };
}

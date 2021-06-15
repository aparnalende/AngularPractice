import { getLocaleWeekEndRange } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginservService {
  constructor() {}
  checkusernameandpassword(uname: string, pwd: string) {
    if (uname == 'aparna' && pwd == 'aparna@123') {
      localStorage.setItem('username', 'aparna');
      return true;
    } else {
      return false;
    }
  }
}

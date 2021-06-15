import { Component, OnInit } from '@angular/core';
import { CaptchaService } from './captcha.service';

@Component({
  selector: 'app-registerservice',
  templateUrl: './registerservice.component.html',
  styleUrls: ['./registerservice.component.css'],
})
export class RegisterserviceComponent implements OnInit {
  public code: any;

  constructor(private capthca: CaptchaService) {}

  ngOnInit(): void {
    this.code = this.capthca.GenerateCode();
  }

  public title = 'Register User';
  public NewCode() {
    this.ngOnInit();
  }
}

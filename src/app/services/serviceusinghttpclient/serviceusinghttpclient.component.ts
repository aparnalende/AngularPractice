import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-serviceusinghttpclient',
  templateUrl: './serviceusinghttpclient.component.html',
  styleUrls: ['./serviceusinghttpclient.component.css'],
})
export class ServiceusinghttpclientComponent {
  data: any = [];

  constructor(public serObj: UserService) {}

  getUsersFromService() {
    this.serObj.getUser().subscribe(
      (response) => {
        console.log(response, 'response');
        this.data = response;
        console.log('Data=>', this.data);
      },
      (error) => {
        console.log(error, 'error');
      }
    );
  }
}

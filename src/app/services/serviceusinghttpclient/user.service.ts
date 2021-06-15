import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiRoot: string = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get('https://api.github.com/users');
  }
}

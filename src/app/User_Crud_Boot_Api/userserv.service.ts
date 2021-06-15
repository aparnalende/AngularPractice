import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class UserservService {
  private userUrl: string;
  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

  public deleteUser(id:any){
    console.log("in service delete method");
    return this.http.delete(`${this.userUrl}/${id}`, { responseType: 'text' });
  }
}

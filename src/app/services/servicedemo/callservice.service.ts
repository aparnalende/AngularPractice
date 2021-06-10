import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallserviceService {

  sayHello():string{
    return "Hello  Welcome to services";
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 username:string="";
 password:string="";

 validateUser():void{
   if(this.username=="aparna@gmail.com" && this.password=="1234"){
     alert("Valid credential");
   }
   else{
     alert("Invalid Username or Password!!!")
   }
 }

}

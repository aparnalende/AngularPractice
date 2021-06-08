import {Component} from '@angular/core';

@Component({
    selector:'app-login',
    template:`
    <h2> {{title}}</h2>
    <dl>
    <dt>UserName:</dt>
    <dd><input type="text"/></dd>
    <dt>Password:</dt>
    <dd><input type="password"/></dd>
    </dl>
    <br>
    <button (click)="LoginClick()">Login</button>
    `,
    styles:['dt{font-weight:bold}']
})
export class LoginComponent{
    public title="Login Page";
    public LoginClick(){
        alert("Login clicked");
    }
}
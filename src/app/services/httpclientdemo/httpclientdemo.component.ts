import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpclientdemo',
  templateUrl: './httpclientdemo.component.html',
  styleUrls: ['./httpclientdemo.component.css'],
})
export class HttpclientdemoComponent {
  apiRoot: string = 'http://httpbin.org/';

  constructor(private http: HttpClient) {}

  doGET() {
    console.log('IN GET METHOD');
    let url = `${this.apiRoot}/get`;
    console.log(url);

    const httpOptions = {
      params: new HttpParams().set('name', 'Aparna').set('limit', '22'),
    };
    this.http
      .get(url, httpOptions)
      .subscribe((res) => console.log('this is res==>', res));
  }

  doPOST() {
    console.log('POST');
    let url = `${this.apiRoot}/post`;
    const httpOptions = {
      params: new HttpParams().set('name', 'Aparna').set('limit', '25'),
    };
    this.http
      .post(url, { cname: 'PU', location: 'FC ROAD' }, httpOptions)
      .subscribe((res) => console.log(res));
  }

  doPUT() {
    console.log('PUT METHOD');
    let url = `${this.apiRoot}/put`;
    const httpOptions = {
      params: new HttpParams().set('name', 'Aparna').set('limit', '22'),
    };
    this.http
      .put(url, { cname: 'SEED', location: 'Pune' }, httpOptions)
      .subscribe((res) => console.log(res));
  }

  doDELETE() {
    console.log('IN DELETE METHOD');
    let url = `${this.apiRoot}/delete`;
    const httpOptions = {
      params: new HttpParams().set('name', 'Rupali').set('limit', '25'),
    };
    this.http.delete(url, httpOptions).subscribe((res) => console.log(res));
  }

  deGETAsPromise() {
    console.log('GET AS PROMISE');
    let url = `${this.apiRoot}/get`;
    this.http
      .get(url)
      .toPromise()
      .then((res) => console.log(res));
  }

  doGETAsPromiseError() {
    console.log('GET AS PROMISE ERROR');
    let url = `${this.apiRoot}/post`;
    this.http
      .get(url)
      .toPromise()
      .then(
        (res) => console.log(res),
        (msg) => console.log(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETAsObservableError() {
    console.log('GET AS OBSERVABLE ERROR');
    let url = `${this.apiRoot}/post`;
    this.http.get(url).subscribe(
      (res) => console.log(res),
      (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: btoa("username:password")
      })
    };

    let url = `${this.apiRoot}/get`;

    this.http
      .get(url, httpOptions)
      .subscribe(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { SystemConstants } from 'app/core/commons/system.constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private headers: Headers;
  constructor(private _http: Http, private _router: Router) {
    this.headers = new Headers();
    this.headers.append('Authorization', `Bearer ${JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER)).token}`);
    this.headers.append('Content-Type', 'application/json');
  }

  get(url: string) {
    return this._http.get(SystemConstants.BASE_API + url, { headers: this.headers }).map(this.extracData);
  }
  post(url: string, data?: any) {
    return this._http.post(SystemConstants.BASE_API + url, data, { headers: this.headers }).map(this.extracData);
  }
  private extracData(res: Response) {
    const body = res.json();
    return body || {};
  }
}

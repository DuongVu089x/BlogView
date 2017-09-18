import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Response, Headers } from '@angular/http';
import { SystemConstants } from "app/core/commons/system.constants";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private headers: Headers;
  constructor(private _http: Http, private _router: Router) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  get(url: string) {
    return this._http.get(SystemConstants.BASE_API + url, { headers: this.headers }).map(this.extracData);
  }

  private extracData(res: Response) {
    let body = res.json();
    return body || {};
  }
}

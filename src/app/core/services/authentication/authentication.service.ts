import { Http } from '@angular/http';
import { SystemConstants } from 'app/core/commons/system.constants';
import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private _http: Http) { }

  login(user) {
    return new Promise((resolve, reject) => {
      this._http.post(`${SystemConstants.BASE_API}/api/user/login`, user)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  register(user) {
    return new Promise((resolve, reject) => {
      this._http.post(`${SystemConstants.BASE_API}/api/user/register`, user)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    })
  }

  isUserAuthenticated(): boolean {
    if (localStorage.getItem(SystemConstants.CURRENT_USER) != null) {
      return true
    }
    return false;
  }

  logout() {
    return new Promise((resolve, reject) => {
      console.log(SystemConstants.CURRENT_USER);
      this._http.post(`${SystemConstants.BASE_API}/api/user/logout`, JSON.stringify(SystemConstants.CURRENT_USER))
        .subscribe(res => {
          localStorage.removeItem(SystemConstants.CURRENT_USER);
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }
}

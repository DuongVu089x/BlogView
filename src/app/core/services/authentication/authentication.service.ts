import { SystemConstants } from 'app/core/commons/system.constants';
import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private _dataService: DataService) { }

  login(user) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/user/login', user)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    });
  }

  register(user) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/user/register', user)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    })
  }

  isUserAuthenticated(): boolean {
    const user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (user != null) {
      return true
    }
    return false;
  }

  logout() {
    return new Promise((resolve, reject) => {
      console.log(SystemConstants.CURRENT_USER);
      this._dataService.post('/api/user/logout', JSON.stringify(SystemConstants.CURRENT_USER))
        .subscribe(res => {
          localStorage.removeItem(SystemConstants.CURRENT_USER);
          resolve(res);
        }, err => {
          reject(err);
        })
    });
  }
}

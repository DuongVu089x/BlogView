import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

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
}

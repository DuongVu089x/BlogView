import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private _dataService: DataService) { }

  getListFriend(myEmail) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/friend/get-list-friend', myEmail)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    })
  }
}

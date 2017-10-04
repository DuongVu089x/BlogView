import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private _dataService: DataService) { }

  getListFriend(myId) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/user/get-list-friend', myId)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    })
  }
}

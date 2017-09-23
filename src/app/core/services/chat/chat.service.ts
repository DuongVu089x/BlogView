import { Http } from '@angular/http';
import { DataService } from './../data/data.service';
import { SystemConstants } from './../../commons/system.constants';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {
  private headers: Headers;
  constructor(private http: Http, private _dataService: DataService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getChatByRoom(participants) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/user/get-room', participants)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        })
    })
  }

  createChatRoom(participants) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/user/create-room', participants)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err)
        });
    })
  }

  getListMessageByRoomId(roomId) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/user/get-list-message-by-room', roomId)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  createMessage(message) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/user/create-message', message)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    })
  }

  login(user) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/user/login', user)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    })
  }

}

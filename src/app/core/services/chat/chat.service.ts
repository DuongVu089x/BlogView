import { UploadService } from './../upload/upload.service';
import { Http } from '@angular/http';
import { DataService } from './../data/data.service';
import { SystemConstants } from './../../commons/system.constants';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {
  constructor(private _dataService: DataService, private _uploadService: UploadService) {
  }

  getChatByRoom(participants) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/room/get-room', participants)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    })
  }

  createChatRoom(participants) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/room/create-room', participants)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err)
        });
    })
  }

  getListMessageByRoomId(roomId) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/message/get-list-message-by-room', roomId)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  createMessage(message) {
    return new Promise((resolve, reject) => {
      this._dataService.post('/api/message/create-message', message)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    })
  }

  uploadFile(data, files: File[]) {
    return this._uploadService.postWithFile('/api/message/upload-file', data, files);
  }
}

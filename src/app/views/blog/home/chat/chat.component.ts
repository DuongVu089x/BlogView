import { RequestOptions } from '@angular/http';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewChecked, HostListener, Input } from '@angular/core';
import * as io from 'socket.io-client';

import { SystemConstants } from './../../../../core/commons/system.constants';
import { ChatService } from './../../../../core/services/chat/chat.service';
import { UploadService } from './../../../../core/services/upload/upload.service';
import { DataService } from './../../../../core/services/data/data.service';
import { User } from './../../../../core/models/user.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public listUserChat: User[];

  public message: string;

  @ViewChild('wrapper')
  private divWrapper: ElementRef;

  @ViewChild('btnUploadImg')
  private btnUploadImg: ElementRef;

  @Input('listFriends')
  public listFriends: User[];

  private listBlockChat: any[];

  private roomId: any;

  user = JSON.parse(JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER))._body);

  currentUser: User;

  positionTop: number;
  maxWidth: number;

  socket = io(SystemConstants.BASE_API);

  constructor(private _dataService: DataService,
    private _chatService: ChatService) {
    this.listBlockChat = [];
  }

  ngOnInit() {
    this.listUserChat = [];

    this.positionTop = window.screen.height - 400;
    this.maxWidth = window.screen.width / 5;
  }


  getMessageByUserId(user: User) {
    this.listUserChat.push(user);
    this.currentUser = user;

    this.getChatByRoom(JSON.stringify({
      myId: this.user._id,
      theirId: this.currentUser._id
    }));
  }

  getChatByRoom(participants) {
    // if (this.roomId !== undefined) {
    //   this.socket.emit('leave-room', this.roomId);
    // }
    this._chatService.getChatByRoom(participants).then((res: any) => {
      this.roomId = res.roomId;
      if (this.roomId === -1) {
        this.createChatRoom(participants);
      } else {
        this.getListMessageByRoomId();
      }

      if (this.listBlockChat.indexOf(this.roomId) < 0) {
        this.listBlockChat.push(this.roomId);
      }

      this.socket.emit('room', this.roomId);
      this.socket.on(`new-message-${res.roomId}`, (data: any) => {
        this.listUserChat.forEach(user => {
          if (user._id === data.user) {
            user.listMessage.push(data);
            return;
          }
        });
      });
    }, (err) => {
      console.log(err);
    });
  }

  createChatRoom(participants) {
    this._chatService.createChatRoom(participants).then((res) => {
      this.roomId = res
    }, (err) => {
      console.log(err);
    });
  }

  getListMessageByRoomId() {
    this._chatService.getListMessageByRoomId(JSON.stringify({ roomId: this.roomId })).then((res: any) => {
      this.listUserChat.forEach((user: User) => {
        if (user._id === this.currentUser._id) {
          user.listMessage = res.listMessage;
          return;
        }
      })
    }, err => {
      console.log(err);
    });

  }

  createMessage(valid: boolean, user: User, _idRoom: string): void {
    if (valid) {
      const data = {
        content: user.newMessage,
        user: user._id,
        room: _idRoom
      }

      this._chatService.createMessage(JSON.stringify(data)).then((res: any) => {
        this.socket.emit('save-message', data);
        user.listMessage.push({
          _id: res._id,
          content: data.content,
          createdBy: data.user,
          createdAt: new Date()
        });
        user.newMessage = '';
      }, err => {
        console.log(err);
      })
    }
  }

  showUpload() {
    this.btnUploadImg.nativeElement.click();
  }

  uploadImage(event: any) {
    console.log(123);
    // tslint:disable-next-line:prefer-const
    let fileList: FileList = event.target.files;
    if (event.target.files.length > 0) {
      this._chatService.uploadFile(null, event.target.files)
        .then((imageUrl: string) => {
          console.log(imageUrl);
          event.target.value = '';
        });
    }
  }

  closeChat(index) {
    this.listUserChat.splice(index, 1);
    this.listBlockChat.splice(index, 1);
  }

  scrollToBottom(): void {
    try {
      this.divWrapper.nativeElement.scrollTop = this.divWrapper.nativeElement.scrollHeight;
    } catch (err) { }
  }
}

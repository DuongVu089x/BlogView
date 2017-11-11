import { RequestOptions } from '@angular/http';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewChecked, HostListener, Input } from '@angular/core';
import * as io from 'socket.io-client';

import { SystemConstants } from './../../../../core/commons/system.constants';
import { ChatService } from './../../../../core/services/chat/chat.service';
import { UploadService } from './../../../../core/services/upload/upload.service';
import { DataService } from './../../../../core/services/data/data.service';
import { User } from './../../../../core/models/user.model';
import { IRoom, Room } from './../../../../core/models/room.models';

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
  private currentRoomId: string;

  private user: User = SystemConstants.USER;

  private currentUser: User;

  private positionTop: number;
  private maxWidth: number;

  socket = io(SystemConstants.BASE_API);

  constructor(private _dataService: DataService,
    private _chatService: ChatService) {
    this.listBlockChat = [];

    console.log(this.user);
  }

  ngOnInit() {
    this.listUserChat = [];

    this.positionTop = window.screen.height - 400;
    this.maxWidth = window.screen.width / 5;
  }


  getMessageByUserId(user: User) {
    this.listUserChat.push(user);
    this.currentUser = user;

    this.getChatByRoom(user);
  }

  getChatByRoom(user: User) {
    // tslint:disable-next-line:prefer-const
    let participants = JSON.stringify({
      myId: this.user._id,
      theirId: this.currentUser._id
    });
    this._chatService.getChatByRoom(participants)
      .then((res: any) => {
        return user.room._id = res.roomId;
      }, (err) => {
        console.log(err);
      }).then((roomId) => {
        if (roomId === '-1') {
          this.createChatRoom(participants, user);
        } else {
          this.getListMessageByRoomId(user);
        }
        if (this.listBlockChat.indexOf(roomId) < 0) {
          this.listBlockChat.push(roomId);
        }
        this.socket.emit('room', roomId);
        this.socket.on(`new-message-${roomId}`, (data: any) => {
          this.listUserChat.forEach(us => {
            if (us.room._id === data.room) {
              us.room.listMessage.push(data);
              return;
            }
          });
        });
      });
  }

  createChatRoom(participants, user: User) {
    this._chatService.createChatRoom(participants).then((res: string) => {
      user.room._id = res;
    }, (err) => {
      console.log(err);
    });
  }

  getListMessageByRoomId(user: User) {
    this._chatService.getListMessageByRoomId(JSON.stringify({ roomId: user.room._id })).then((res: any) => {
      user.room.listMessage = res.listMessage
    }, err => {
      console.error(err);
    });

  }

  createMessage(valid: boolean, user: User, _idRoom: string): void {
    if (valid) {
      this.sendMessageToServer(user, _idRoom, {
        content: user.newMessage,
        user: this.user._id,
        room: _idRoom,
        type: 'message'
      });
    }
  }

  sendMessageToServer(user: User, _idRoom: string, data: any) {
    this._chatService.createMessage(JSON.stringify(data))
      .then((res: any) => {
        this.socket.emit('save-message', data);
        console.log(data);
        user.room.listMessage.push({
          _id: res._id,
          content: data.content,
          user: data.user,
          createdAt: new Date(),
          type: data.type
        });
        user.newMessage = '';
      }, err => {
        console.log(err);
      });
  }

  showUpload(blockChat: string, user: User) {
    console.log(user._id);
    this.currentRoomId = blockChat;
    this.currentUser = user;
    this.btnUploadImg.nativeElement.click();
  }

  uploadImage(event: any) {
    // tslint:disable-next-line:prefer-const
    let fileList: FileList = event.target.files;
    if (event.target.files.length > 0) {
      this._chatService.uploadFile(null, event.target.files)
        .then((imageUrl: any) => {
          event.target.value = '';
          return imageUrl.filename;
        }).then((filename: string) => {
          this.sendMessageToServer(this.currentUser, this.currentRoomId, {
            content: `${SystemConstants.BASE_API}/static/uploads/${filename}`,
            user: this.user._id,
            room: this.currentRoomId,
            type: 'image'
          });
          console.log(this.currentUser._id);
        }).catch(err => console.log(err));
    }
  }

  closeChat(index, roomId: string) {
    if (roomId !== undefined) {
      this.socket.emit('leave-room', roomId);
    }
    this.listUserChat.splice(index, 1);
    this.listBlockChat.splice(index, 1);
  }

  scrollToBottom(): void {
    try {
      this.divWrapper.nativeElement.scrollTop = this.divWrapper.nativeElement.scrollHeight;
    } catch (err) { }
  }
}

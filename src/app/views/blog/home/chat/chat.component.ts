import { ChatService } from './../../../../core/services/chat/chat.service';
import { DataService } from './../../../../core/services/data/data.service';
import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewChecked, HostListener } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public listMessage: any[];
  public listUser: any[];
  public message: string;
  public isLogin = false;

  @ViewChild('wrapper')
  private divWrapper: ElementRef;
  @ViewChild('chatBlock')
  private divChatBlock: ElementRef;

  private listBlockChat: any[];

  height = 300;
  chats: any;
  joinned = false;

  newUser = {
    nickname: '',
    room: ''
  };
  msgData = {
    room: 0,
    nickname: '',
    message: ''
  };

  roomId;

  user = {
    _id: '59bfe5c3eb5b610744b35542',
    firstName: 'anh',
    lastName: 'tai',
    email: '12355@gmail.com',
  };

  currentUser: any;

  positionTop: number;
  maxWidth: number;

  socket = io('http://localhost:3000');

  constructor(private _dataService: DataService,
    private chatService: ChatService) {

    this.listBlockChat = [];
  }

  ngOnInit() {
    this.listUser = [];
    this.listMessage = [];
    this.getListUser();

    const that = this;
    this.socket.on('new-message', function (data: any) {
      that.listMessage.push(data);
    });
    this.positionTop = window.screen.height - 400;
    this.maxWidth = window.screen.width / 5;
  }

  getListUser() {
    this._dataService.get('/api/user/list-user').subscribe((response: any) => {
      response.listUser.forEach(user => {
        this.listUser.push(user);
      });
    });
  }

  getMessageByUserId(user: any) {
    this.listMessage = [];
    this.currentUser = user;

    // tslint:disable-next-line:prefer-const
    let participants = {
      myId: this.user._id,
      theirId: this.currentUser._id
    }

    this.getChatByRoom(JSON.stringify(participants));
  }

  scrollToBottom(): void {
    try {
      this.divWrapper.nativeElement.scrollTop = this.divWrapper.nativeElement.scrollHeight;
    } catch (err) { }
  }

  getAllMessage(): any {
    this._dataService.get('/api/user/').subscribe((response: any) => {
      response.listMessage.forEach(message => {
        this.listMessage.push(message);
      });
    })
  }

  getChatByRoom(participants) {
    if (this.roomId !== undefined) {
      this.socket.emit('leave-room', this.roomId);
    }
    this.chatService.getChatByRoom(participants).then((res: any) => {
      this.roomId = res.roomId;
      if (this.roomId === -1) {
        this.createChatRoom(participants);
      } else {
        this.getListMessageByRoomId();
      }

      const indexRoom = this.listBlockChat.indexOf(this.roomId);
      if (indexRoom < 0) {
        this.listBlockChat.push(this.roomId);
      }

      this.socket.emit('room', this.roomId);
    }, (err) => {
      console.log(err);
    });
  }

  createChatRoom(participants) {
    this.chatService.createChatRoom(participants).then((res) => {
      this.roomId = res
    }, (err) => {
      console.log(err);
    });
  }

  getListMessageByRoomId() {
    this.chatService.getListMessageByRoomId(JSON.stringify({ roomId: this.roomId })).then((res: any) => {
      this.listMessage = res.listMessage;
    }, err => {
      console.log(err);
    });

  }

  createMessage(valid: boolean): void {
    if (valid) {
      const data = {
        content: this.message,
        user: this.user._id,
        room: this.roomId
      }
      this.chatService.createMessage(JSON.stringify(data)).then((res: any) => {
        this.socket.emit('save-message', data);
        this.listMessage.push(data);
        this.message = '';
      }, err => {
        console.log(err);
      })
    }
  }

  closeChat(index) {
    index = this.listBlockChat.indexOf(index);
    this.listBlockChat.splice(index, 1);
  }
}

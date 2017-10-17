import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SystemConstants } from './../../../core/commons/system.constants';
import { UserService } from './../../../core/services/user/user.service';

import { User } from './../../../core/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artiles = [
    {
      'urlTile': 'https://photo2.tinhte.vn/data/attachment-files/2017/08/4119945_cv-ipad.jpg',
      'title': '[Review] iPad Pro 10.5 + Smart Keyboard đã làm mình muốn rời xa MacBook Pro'
    }
  ]

  listFriends: User[];

  constructor(private http: HttpClient, private _userService: UserService) { }

  ngOnInit() {
    this.getListFriend();
  }

  onScroll() {
    this.artiles.push({
      'urlTile': 'https://photo2.tinhte.vn/data/attachment-files/2017/08/4119945_cv-ipad.jpg',
      'title': '[Review] iPad Pro 10.5 + Smart Keyboard đã làm mình muốn rời xa MacBook Pro'
    });
  }

  getListFriend() {
    this._userService.getListFriend({
      email: JSON.parse(JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER))._body).email
    })
      .then((res: User[]) => {
        this.listFriends = res;
      }, err => {
        console.log(err);
      });
  }
}

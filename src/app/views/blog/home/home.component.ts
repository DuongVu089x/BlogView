import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SystemConstants } from './../../../core/commons/system.constants';
import { UserService } from './../../../core/services/user/user.service';

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

  listFriends: any[];

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
    // tslint:disable-next-line:prefer-const
    let userInfo = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
    console.log(userInfo);
    // tslint:disable-next-line:prefer-const
    let email = {
      email: userInfo.user
    }
    this._userService.getListFriend(email)
      .then((res: any) => {
        this.listFriends = res;
        console.log(this.listFriends);
      }, err => {
        console.log(err);
      });
  }


}

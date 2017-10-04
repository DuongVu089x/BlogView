import { UserService } from './../../../core/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  listFriend: any[];

  constructor(private http: HttpClient, private _userService: UserService) { }

  ngOnInit() {

  }

  onScroll() {
    this.artiles.push({
      'urlTile': 'https://photo2.tinhte.vn/data/attachment-files/2017/08/4119945_cv-ipad.jpg',
      'title': '[Review] iPad Pro 10.5 + Smart Keyboard đã làm mình muốn rời xa MacBook Pro'
    });
  }

  getListFriend() {

  }


}

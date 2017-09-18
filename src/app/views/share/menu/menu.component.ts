import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  flag: boolean;
  styleMenu: string;
  constructor(private el: ElementRef) {
    this.flag = false;
    this.styleMenu = 'collection with-header';
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const height = document.body.scrollTop;
    if (height >= 250 && !this.flag) {
      this.styleMenu += ' menu-fixed';
      this.flag = true;
    } else if (height === 0) {
      this.styleMenu = 'collection with-header';
      this.flag = false;
    }
  }
}

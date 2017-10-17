import { SystemConstants } from 'app/core/commons/system.constants';
import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  flag: boolean;
  styleHeader: string;

  user = JSON.parse(JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER))._body);

  constructor(private el: ElementRef) {
    this.flag = false;
    this.styleHeader = 'nav-header';
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const height = document.scrollingElement.scrollTop;
    const heightHeader = this.el.nativeElement.offsetHeight;
    if (height > (heightHeader + 100) && !this.flag) {
      this.flag = true;
      this.styleHeader += ' nav-fixed';
    } else if (height <= heightHeader && this.flag) {
      this.flag = false;
      this.styleHeader = 'nav-header';
    }
  }
}

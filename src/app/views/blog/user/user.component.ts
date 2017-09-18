import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.updateStyle();
  }

  updateStyle() {
    $('md-ink-bar.mat-ink-bar').css({
      'height': '4px',
      'background-color': 'bisque'
    });

    const height = $(window).height();
    const heightHeader = $('#header').height();
    const heightFooter = $('.page-footer').height();
    $('.login-container').height(height - heightHeader - heightFooter);
    console.log(height - heightHeader - heightFooter);
  }
}

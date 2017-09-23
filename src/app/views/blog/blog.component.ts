import { DataService } from './../../core/services/data/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  result: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    $.get('../../../assets/js/custom.js');
    $.get('../../../assets/css/custom.css');
  }

  test() {
    this._dataService.get('/').subscribe((response: string) => {
      console.log(response);
      this.result = response;
    }, error => {
      console.log("error");
    })
  }

}

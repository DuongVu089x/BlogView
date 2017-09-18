import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input('article')
  article: any;

  // tslint:disable-next-line:max-line-length
  public uri = 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-1/p40x40/11133810_580360328733108_1655132751212319089_n.jpg?oh=2fced65e57728c61a6cf76dcccd1536b&oe=5A1645DA';

  constructor() { }

  ngOnInit() {
  }

}

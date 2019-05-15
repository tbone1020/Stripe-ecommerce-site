import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-source',
  templateUrl: './news-source.component.html',
  styleUrls: ['./news-source.component.css']
})
export class NewsSourceComponent implements OnInit {

  @Input() image: string;
  @Input() newsTitle: string;
  @Input() sourceLink: string;

  constructor() { }

  ngOnInit() {
  }

}

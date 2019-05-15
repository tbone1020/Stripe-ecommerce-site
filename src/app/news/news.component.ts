import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsSources: Object[];

  constructor() {
    this.newsSources = [{
      image: 'bullet-train.png',
      newsTitle: "Japan begins testing the world\'s fastest bullet train",
      sourceLink: 'https://www.popularmechanics.com/technology/infrastructure/a27457041/japans-new-bullet-train-can-hit-224-mph/'
    },{
      image: '',
      newsTitle: '',
      briefDesctiption: ''
    },{
      image: '',
      newsTitle: '',
      briefDesctiption: ''
    }];
  }

  ngOnInit() {
  }

}

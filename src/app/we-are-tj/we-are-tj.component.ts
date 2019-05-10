import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-are-tj',
  templateUrl: './we-are-tj.component.html',
  styleUrls: ['./we-are-tj.component.css']
})
export class WeAreTjComponent implements OnInit {

  weAreJapanText: Object[];

  constructor() {
    this.weAreJapanText = [{
      icon: "fas fa-train",
      header: "Japan Rail Pass",
      text: "We sell passes for the famous high speed bullet train for 7 days, 14 days, or 21 days for coach and 1st class."
    }, {
      icon: "fas fa-ticket-alt",
      header: "Subway Train Passes",
      text: "Skip the long lines in the subways stations. Buy a day pass or a week pass for either Tokyo, Osaka, Kyoto, or Hiroshima."
    }, {
      icon: "fab fa-telegram-plane",
      header: "Airfaire deals",
      text: "The most expensive part of traveling can be Airfere. Don't worry, we got your back. We bundled cheap airfare with hotels along tours so you're saving and have enough for the delicious Ramen."
    }];
  }

  ngOnInit() {
  }

}

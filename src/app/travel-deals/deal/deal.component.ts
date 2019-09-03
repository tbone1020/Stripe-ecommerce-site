import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  @Input() name: string;
  @Input() image: string;
  @Input() percentOff: string;
  @Input() price: string;

  constructor() { }

  ngOnInit() {
    console.log(`Info ${this.name} ${this.image} ${this.percentOff} ${this.price}`);
  }

}

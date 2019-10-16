import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-deals',
  templateUrl: './hotel-deals.component.html',
  styleUrls: ['./hotel-deals.component.css']
})
export class HotelDealsComponent implements OnInit {
  
  @Input() name: string;
  @Input() image: string;
  @Input() location: string;
  @Input() percentOff: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  @Input() description: string;
  @Input() percentOff: string;
  @Input() price: string;
  @Input() image: string;

  constructor() {}

  ngOnInit() {
    
  }

}

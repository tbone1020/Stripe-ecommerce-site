import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  
  @Input() image: string;
  @Input() description: string;
  @Input() location: string;
  @Input() duration: string;
  @Input() price: string;

  constructor() { }

  ngOnInit() {
  }

}

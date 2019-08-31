import { Component, OnInit } from '@angular/core';
import { MockDealApiService } from '../core/deals/mock-deal-api.service';

@Component({
  selector: 'app-travel-deals',
  templateUrl: './travel-deals.component.html',
  styleUrls: ['./travel-deals.component.css']
})
export class TravelDealsComponent implements OnInit {

  constructor(private mockDeal: MockDealApiService) {}

  ngOnInit() {
  }

}

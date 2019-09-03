import { Component, OnInit } from '@angular/core';
import { MockDealApiService } from '../core/services/deals/mock-deal-api.service';

@Component({
  selector: 'app-travel-deals',
  templateUrl: './travel-deals.component.html',
  styleUrls: ['./travel-deals.component.css']
})
export class TravelDealsComponent implements OnInit {

  dealsList: Object[] = null;

  constructor(private deals: MockDealApiService) {}

  ngOnInit() {
    this.deals.getJSON().subscribe(dealsList => {
      this.dealsList = dealsList.data;
    })
  }

}

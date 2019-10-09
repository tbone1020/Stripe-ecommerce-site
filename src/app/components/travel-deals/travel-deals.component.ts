import { Component, OnInit } from '@angular/core';
import { DealApiService } from '../../services/deals/deal-api.service';

@Component({
  selector: 'app-travel-deals',
  templateUrl: './travel-deals.component.html',
  styleUrls: ['./travel-deals.component.css']
})
export class TravelDealsComponent implements OnInit {

  dealsList: Object[];
  hotelDealsList: Object[];

  constructor(private deals: DealApiService) {}

  async ngOnInit() {
    try {
      const response = await this.deals.getDealList();
      this.dealsList = response.deals;
    } catch(e) {
      console.log(e);
    }
  }

}

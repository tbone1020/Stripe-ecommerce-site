import { Component, OnInit } from '@angular/core';
import { MockDealApiService } from '../../services/deals/mock-deal-api.service';

@Component({
  selector: 'app-travel-deals',
  templateUrl: './travel-deals.component.html',
  styleUrls: ['./travel-deals.component.css']
})
export class TravelDealsComponent implements OnInit {

  dealsList: Object[];

  constructor(private deals: MockDealApiService) {}

  async ngOnInit() {
    const response = await this.deals.getJSON();
    this.dealsList = response.deals;
    console.log(this.dealsList);
  }

}

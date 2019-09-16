import { Component, OnInit } from '@angular/core';
import { DealApiService } from '../../services/deals/deal-api.service';

@Component({
  selector: 'app-travel-deals',
  templateUrl: './travel-deals.component.html',
  styleUrls: ['./travel-deals.component.css']
})
export class TravelDealsComponent implements OnInit {

  dealsList: Object[];

  constructor(private deals: DealApiService) {}

  async ngOnInit() {
    const response = await this.deals.getDealList();
    this.dealsList = response.deals;
  }

}

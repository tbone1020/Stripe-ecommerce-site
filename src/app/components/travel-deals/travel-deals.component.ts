import { Component, OnInit } from '@angular/core';
import { DealApiService } from '../../services/deals/deal-api.service';
import { PackageDealItem } from '../../shared/models/package-deal-item.model';

@Component({
  selector: 'app-travel-deals',
  templateUrl: './travel-deals.component.html',
  styleUrls: ['./travel-deals.component.css']
})
export class TravelDealsComponent implements OnInit {

  packageDealsList: PackageDealItem[];
  hotelDealsList: Object[];

  constructor(private deals: DealApiService) {}

  ngOnInit() {
    this.getPackageDealsList();
    this.getHotelDealsList();
  }

  async getPackageDealsList(): Promise<any> {
      try {
        const packageDeals = await this.deals.getDealList();
        console.log("------------------");
        console.log(packageDeals);
        // this.packageDealsList = packageDeals;
      } catch(e) {
        console.log(e);
      }
  }

  async getHotelDealsList(): Promise<any> {
      try {

      } catch(e) {
        console.log(e);
      }
  }

}

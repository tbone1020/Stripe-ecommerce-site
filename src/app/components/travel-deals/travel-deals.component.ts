import { Component, OnInit } from '@angular/core';
import { DealApiService } from '../../services/deals/deal-api.service';
import { PackageDealItem } from '../../shared/models/package-deal-item.model';
import { HotelDealList } from '../../shared/models/hotel-deals-item.model';

@Component({
  selector: 'app-travel-deals',
  templateUrl: './travel-deals.component.html',
  styleUrls: ['./travel-deals.component.css']
})
export class TravelDealsComponent implements OnInit {

  packageDealsList: PackageDealItem[];
  hotelDealsList: HotelDealList[];

  constructor(private deals: DealApiService) {}

  ngOnInit() {
    this.getPackageDeals();
    this.getHotelDeals();
  }

  async getPackageDeals(): Promise<any> {
    const packageDeals = await this.deals.getPackageDealList();
    this.packageDealsList = packageDeals;
  }

  async getHotelDeals(): Promise<any> {
    const hotelsDeals = await this.deals.getHotelDealList();
    this.hotelDealsList = hotelsDeals;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADeal } from './adeal';
import { IPackageDeals } from './interfaces/ipackagedeals';
import { IHotelDeals } from './interfaces/ihoteldeals';
import { PackageDealItem } from '../../shared/models/package-deal-item.model';
import { HotelDealList } from '../../shared/models/hotel-deals-item.model';

@Injectable({
  providedIn: 'root'
})
export class DealApiService implements ADeal {
  private base: string = './assets/mock-json-tests/';

  constructor(private http: HttpClient) { }

  public async getPackageDealList(): Promise<any> {
    const response = await this.http.get<IPackageDeals>(`${this.base}/mock-deals.json`).toPromise();
    return response.deals.map(deal => new PackageDealItem(deal));
  }

  public async getHotelDealList(): Promise<any> {
    const response = await this.http.get<IHotelDeals>(`${this.base}/hotel-deals.json`).toPromise();
    return response.deals.map(deal => new HotelDealList(deal));
  }

}

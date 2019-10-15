import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADeal } from './adeal';
import { PackageDealItem } from '../../shared/models/package-deal-item.model';
import { HotelDealList } from '../../shared/models/hotel-deals-item.model';

@Injectable({
  providedIn: 'root'
})
export class DealApiService implements ADeal {
  private base: string = './assets/mock-json-tests/';

  constructor(private http: HttpClient) { }

  async getDealList(): Promise<any> {
    const response = await this.http.get(`${this.base}/mock-deals.json`).toPromise();
    return response.deals.map(deal => new PackageDealItem(deal));
  }

  async getHotelDealList(): Promise<any> {
    const response = await this.http.get(`${this.base}/hotel-deals.json`).toPromise();
    return response;
  }

}

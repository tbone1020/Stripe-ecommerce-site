import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADeal } from './adeal';
import { DealList } from '../../shared/models/deal-list.model';

@Injectable({
  providedIn: 'root'
})
export class DealApiService implements ADeal {
  private base: string = './assets/mock-json-tests/';

  constructor(private http: HttpClient) { }

  async getDealList(): Promise<any> {
    const response = await this.http.get(`${this.base}/mock-deals.json`).toPromise();
    const dealList = new DealList(response);
    return response;
  }

  async getHotelDealList(): Promise<any> {
    const response = await this.http.get(`${this.base}/hotel-deals/json`).toPromise();
    return response;
  }

}

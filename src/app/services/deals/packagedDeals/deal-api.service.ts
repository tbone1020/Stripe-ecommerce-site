import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADeal } from '../adeal';
import { DealList } from '../../../shared/models/deal-list.model';

@Injectable({
  providedIn: 'root'
})
export class DealApiService implements ADeal {
  private base: string = './assets/mock-json-tests/mock-deals.json';

  constructor(private http: HttpClient) { }

  async getDealList(): Promise<any> {
    const response = await this.http.get(this.base).toPromise();
    // const dealList = new DealList(response);
    // console.log(dealList);
    return response;
  }

}

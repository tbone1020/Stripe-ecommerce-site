import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ADeal } from '../adeal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDealApiService implements ADeal {
  private base: string = './assets/mock-json-tests/mock-deals.json';

  constructor(private http: HttpClient) { }

  async getDealList(): Promise<any> {
    const response = await this.http.get(this.base).toPromise();
    return response;
    // return new instance of deal list.
  }

}

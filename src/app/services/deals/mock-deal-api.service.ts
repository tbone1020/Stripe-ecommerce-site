import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDeal } from './ideal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDealApiService implements IDeal {
  private base: string = './assets/mock-json-tests/mock-deals.json';

  constructor(private http: HttpClient) {}

  async getJSON(): Promise<any> {
    const response = await this.http.get(this.base).toPromise();
    return response;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDeal } from './ideal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDealApiService implements IDeal {

  constructor(private http: HttpClient) {}

  async getJSON(): Observable<any> {
    const response = await this.http.get('./assets/mock-json-tests/mock-deals.json').toPromise();
    console.log(response);
    return;
  }

}

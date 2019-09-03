import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDeal } from './ideal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDealApiService implements IDeal {

  constructor(private http: HttpClient) {}

  getJSON(): Observable<any> {
    return this.http.get('./assets/mock-json-tests/mock-deals.json');
  }

}

import { Injectable } from '@angular/core';
import { IDeal } from './ideal';

@Injectable({
  providedIn: 'root'
})
export class MockDealApiService implements IDeal {

  deals: Object[] = null;

  constructor() {}
}

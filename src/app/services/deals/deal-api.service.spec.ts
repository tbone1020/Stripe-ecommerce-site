import { TestBed } from '@angular/core/testing';
import { DealApiService } from './deal-api.service';

describe('DealApiService', () => {
  it('Exists', () => {
    expect(DealApiService).toBeDefined();
  });

  it('Can be built', () => {
    // act
    const service = new DealApiService(null);
    // assert
    expect(service instanceof DealApiService).toBe(true);
  });
});

import { TestBed } from '@angular/core/testing';

import { MockDealApiService } from './mock-deal-api.service';

describe('MockDealApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockDealApiService = TestBed.get(MockDealApiService);
    expect(service).toBeTruthy();
  });
});

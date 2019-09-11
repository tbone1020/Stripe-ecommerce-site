import { MockDealApiService } from './mock-deal-api.service';

describe('MockDealApiService', () => {
  it('Exists', () => {
    expect(MockDealApiService).toBeDefined();
  });

  it('Can be built', () => {
    // act
    const service = new MockDealApiService(null);

    // assert
    expect(service instanceof MockDealApiService).toBe(true);
  });
});

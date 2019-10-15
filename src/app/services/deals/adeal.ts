export abstract class ADeal {
  public async abstract getPackageDealList(): Promise<any>;
  public async abstract getHotelDealList(): Promise<any>;
}

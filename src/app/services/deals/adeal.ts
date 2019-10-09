export abstract class ADeal {
  public abstract async getDealList(): Promise<any>;
  public abstract async getHotelDealList(): Promise<any>;
}

export class HotelDealList {
  public description: string;
  public price: string;
  public percentOff: string;
  public image: string;

  constructor(data: any) {
    this.description = data.description;
    this.price = data.price;
    this.percentOff = data.percentOff;
    this.image = data.image;
  }
}

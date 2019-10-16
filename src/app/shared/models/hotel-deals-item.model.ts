export class HotelDealList {
  public name: string;
  public location: string;
  public price: number;
  public percentOff: string;
  public image: string;

  constructor(data: any) {
    this.name = data.name;
    this.location = data.location;
    this.price = data.price;
    this.percentOff = data.percentOff;
    this.image = data.image;
  }
}

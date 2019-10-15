export class PackageDealItem {
  public description: string;
  public price: string;
  public percentOff: string;
  public image: string;

  constructor(data?: any) {
    console.log(`Data ---------------`);
    console.log(data.image);
    this.description = '';
    this.price = '';
    this.percentOff = '';
    this.image = '';

  }
}

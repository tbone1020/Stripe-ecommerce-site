export class DealListItem {
  public description: string;
  public price: string;
  public percentOff: string;
  public image: string;

  constructor(data?: any) {
    const defaults = {
      ...data
    }

    // console.log(defaults);
  }
}

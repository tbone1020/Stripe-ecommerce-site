import { DealListItem } from './deal-list-item.model';

export class DealList {
  public dealList: any[];

  constructor(data?: any) {
    const defaults = {
      dealList: [],
      ...data
    }
    this.dealList = defaults.deals.map((deal) => new DealListItem(deal));
  }
}

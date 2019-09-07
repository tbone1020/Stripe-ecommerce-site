import { Component, OnInit } from '@angular/core';
import { MockDealApiService } from '../../../services/deals/mock-deal-api.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  dealsList: Object[];

  constructor(private deals: MockDealApiService) {}

  async ngOnInit() {
    const response = await this.deals.getJSON();
    this.dealsList = response.deals;
    console.log(this.dealsList);
  }

  grabJSON(): void {

  }

}

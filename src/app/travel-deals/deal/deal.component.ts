import { Component, OnInit } from '@angular/core';
import { MockDealApiService } from '../../core/services/deals/mock-deal-api.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {

  dealsList: Object[] = [{}];

  constructor(private deals: MockDealApiService) {}

  ngOnInit() {
    this.deals.getJSON().subscribe(dealsList => {
      this.dealsList = dealsList.data;
      console.log(this.dealsList);
    });
  }

}

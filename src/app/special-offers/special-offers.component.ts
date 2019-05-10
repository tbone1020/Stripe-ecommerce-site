import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-offers',
  templateUrl: './special-offers.component.html',
  styleUrls: ['./special-offers.component.css']
})
export class SpecialOffersComponent implements OnInit {

  specialOffers: Object[];

  constructor() {
    this.specialOffers = [{
      image: "shinjuku-thumbnail.png",
      description: "9 Nights including, Hotel and Airfare, in Tokyo's famous Shinjuku district",
      location: "Tokyo",
      price: "$2,500.00"
    },{
      image: "osaka-thumbnail.png",
      description: "9 nights in a 5 start hotel in Osaka on the Dotonbori River.",
      location: "Osaka",
      price: "$1,500.00"
    },{
      image: "kyoto-tori-thumbnail.png",
      description: "14 days in Kyoto's historic district.",
      location: "Kyoto",
      price: "$3,000.00"      
    }]
  }

  ngOnInit() {
  }

}

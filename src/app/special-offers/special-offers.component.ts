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
      image: "shinjuku-thumbnail-offer.png",
      description: "Hotel and Airfare in Tokyo's famous Shinjuku district",
      location: "Tokyo",
      duration: "9 Nights / 8 nights",
      price: "$2,500.00"
    },{
      image: "osaka-thumbnail-offer.png",
      description: "5 star hotel in Osaka on the Dotonbori River.",
      location: "Osaka",
      duration: "9 nights / 8 nights",
      price: "$1,500.00"
    },{
      image: "kyoto-tori-thumbnail-offer.png",
      description: "Airfare and hotel to Kyoto's historic district.",
      location: "Kyoto",
      duration: "14 days / 13 nights",
      price: "$3,000.00"      
    }]
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-destinations',
  templateUrl: './top-destinations.component.html',
  styleUrls: ['./top-destinations.component.css']
})
export class TopDestinationsComponent implements OnInit {

  topDestinations: Object[];

  constructor() {
    this.topDestinations = [{
      imagePath: "shinjuku-thumbnail.png",
      altText: "downtown shinjuku",
      name: "Tokyo"
    },{
      imagePath: "package-deals/mt-fuji-thumbnail.png",
      altText: "mount fuji",
      name: "Mt. Fuji"
    },{
      imagePath: "osaka-thumbnail.png",
      altText: "downtown osaka",
      name: "Osaka"
    },{
      imagePath: "kamakura-thumbnail.png",
      altText: "buddha statue in kamakura",
      name: "Kamakura"
    }]
  }

  ngOnInit() {
  }

}

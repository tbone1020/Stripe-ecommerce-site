import { Component, OnInit, NgModule, Input} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  @Input() navigationState: string = "white";

  navigationList: Object[] = [{
    text: "Home",
    link: "/"
  },{
    text: "About Us",
    link: "aboutus"
  },{
    text: "Travel Deals",
    link: "travel-deals"
  },{
    text: "Hotel Deals",
    link: "hotel-deals"
  }]

  constructor() {

  }

  ngOnInit() {

  }

  toggleMobileNavigationMenu() {

  }

}

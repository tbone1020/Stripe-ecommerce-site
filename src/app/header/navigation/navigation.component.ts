import { Component, OnInit, NgModule, Input} from '@angular/core';
import { AppComponent } from '../../app.component';
 
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  @Input() navigationState: string;

  navigationList: Object[] = [{
    text: "Home",
    link: "/"
  },{
    text: "About Us",
    link: "aboutus"
  },{
    text: "Special Offers",
    link: "offers"
  },{
    text: "Experiences",
    link: "experiences"
  }]

  constructor() {

  }

  ngOnInit() {
    console.log(`The state of the navigation is ${this.navigationState}`);
  }

  menuIconClickEvent() {
    
  }

}

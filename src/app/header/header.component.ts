import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input() colorOfNavigation: string;

  constructor() {
  }

  ngOnInit() {
    console.log(`The Input is ${this.colorOfNavigation}`);
  }

}

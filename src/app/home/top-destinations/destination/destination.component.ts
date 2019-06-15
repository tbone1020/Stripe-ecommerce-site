import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DestinationComponent implements OnInit {

  @Input() destinationImagePath: string;
  @Input() destinationAltText: string;
  @Input() destinationName: string;

  constructor() { }

  ngOnInit() {
  }

}

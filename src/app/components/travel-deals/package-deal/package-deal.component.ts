import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package-deal',
  templateUrl: './package-deal.component.html',
  styleUrls: ['./package-deal.component.css']
})
export class PackageDealComponent implements OnInit {

  @Input() description: string;
  @Input() percentOff: string;
  @Input() price: string;
  @Input() image: string;

  constructor() {}

  ngOnInit() {

  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  @Input() icon: string;
  @Input() header: string;
  @Input() text: string;


  constructor() { }

  ngOnInit() {
  }

}

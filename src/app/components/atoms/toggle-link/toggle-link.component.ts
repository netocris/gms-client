import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-link',
  templateUrl: './toggle-link.component.html',
  styleUrls: ['./toggle-link.component.css']
})
export class ToggleLinkComponent implements OnInit {

  @Input()
  value_: string = 'value_';
  
  @Input()
  url_: string = '';  

  @Input()
  class_: string = '';

  constructor() { }

  ngOnInit() {
  }

}

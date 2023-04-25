import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-link',
  templateUrl: './toggle-link.component.html',
  styleUrls: ['./toggle-link.component.css']
})
export class ToggleLinkComponent implements OnInit {

  @Input()
  valueModel: string = 'valueModel';
  
  @Input()
  url: string = '';  

  @Input()
  class: string = '';

  @Input()
  dataToggleAttr: string = 'collapse';

  @Input()
  ariaExpandedAttr: string = 'false';

  @Input()
  ariaControlsAttr: string = '';

  constructor() { }

  ngOnInit() {
  }

}

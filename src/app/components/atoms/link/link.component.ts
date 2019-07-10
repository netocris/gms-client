import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input()
  valueModel: string = 'link';

  @Input()
  disabled: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}

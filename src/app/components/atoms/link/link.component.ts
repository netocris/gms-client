import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  @Input()
  linkValue: string = 'linkValue';
  
  @Input()
  url: string = ''  
  
  @Input()
  target: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

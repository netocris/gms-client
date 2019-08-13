import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-link',
  templateUrl: './search-link.component.html',
  styleUrls: ['./search-link.component.css']
})
export class SearchLinkComponent implements OnInit {

  @Input()
  class_: string = '';

  @Output()
  eventEmmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.eventEmmitter.emit();
  }

}

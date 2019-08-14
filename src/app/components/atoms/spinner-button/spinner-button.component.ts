import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-spinner-button',
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.css']
})
export class SpinnerButtonComponent implements OnInit {

  @Input()
  valueModel: string = 'valueModel';

  @Input()
  class: string = '';

  @Input()
  disabled: boolean = false;

  @Input()
  spin: boolean = false;

  @Output()
  eventEmmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.eventEmmitter.emit(this.valueModel);
  }

}

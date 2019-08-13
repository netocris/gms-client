import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input()
  value_: number;

  @Input()
  name_: string = 'name_';

  @Input()
  class_: string = '';

  @Input()
  placeHolder_: string = 'placeHolder_';

  @Input()
  disabled_: boolean = false;

  @Input()
  required_: boolean = false;

  @Output()
  outputEventEmmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(): void {
    this.outputEventEmmitter.emit(this.value_);
  }  

}

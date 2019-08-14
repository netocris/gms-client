import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input()
  valueModel: number;

  @Input()
  name: string = 'name_';

  @Input()
  class: string = '';

  @Input()
  placeHolder: string = 'placeHolder_';

  @Input()
  disabled: boolean = false;

  @Input()
  required: boolean = false;

  @Output()
  outputEventEmmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(): void {
    this.outputEventEmmitter.emit(this.valueModel);
  }  

}

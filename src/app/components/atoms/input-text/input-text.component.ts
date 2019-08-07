import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input()
  inputValue: string = 'inputValue';

  @Input()
  inputClass: string = '';

  @Input()
  inputName: string = 'inputName';

  @Input()
  inputPlaceHolder: string = 'inputPlaceHolder';

  @Input()
  disabled: boolean = false;

  @Input()
  required: boolean = false;

  @Output()
  eventEmmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(): void {
    this.eventEmmitter.emit(this.inputValue);
  }  

}

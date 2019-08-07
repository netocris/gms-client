import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  @Input()
  inputValue: number;

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

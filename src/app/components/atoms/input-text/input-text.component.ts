import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']  
})
export class InputTextComponent implements OnInit {

  @Input()
  value_: string = 'value';

  @Input()
  name_: string = 'name';

  @Input()
  class_: string = '';
  
  @Input()
  placeHolder_: string = 'inputPlaceHolder';

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
    if(this.isEmptyValue(this.value_)){
      this.value_ = null;
    } else {
      this.value_ = this.value_.trim();
    }
    this.outputEventEmmitter.emit(this.value_);  
  }  

  private isEmptyValue(value: string): boolean {
    return value === undefined || value === null || value.split(' ').join('') === '';
  }

}

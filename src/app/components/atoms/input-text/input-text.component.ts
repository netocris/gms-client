import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']  
})
export class InputTextComponent implements OnInit {

  @Input()
  valueModel: string = 'value';

  @Input()
  name: string = 'name';

  @Input()
  class: string = '';
  
  @Input()
  placeHolder: string = 'inputPlaceHolder';

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
    if(this.isEmptyValue(this.valueModel)){
      this.valueModel = null;
    } else {
      this.valueModel = this.valueModel.trim();
    }
    this.outputEventEmmitter.emit(this.valueModel);  
  }  

  private isEmptyValue(value: string): boolean {
    return value === undefined || value === null || value.split(' ').join('') === '';
  }

}

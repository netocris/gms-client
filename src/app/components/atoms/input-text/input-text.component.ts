import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  inputPlaceHolder: string = 'inputPlaceHolder';

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
    console.log(this.inputValue);
    if(this.isEmptyValue(this.inputValue)){
      this.inputValue = null;
    } else {
      this.inputValue = this.inputValue.trim();
    }
    this.outputEventEmmitter.emit(this.inputValue);  
  }  

  private isEmptyValue(value: string): boolean {
    return value === undefined || value === null || value.split(' ').join('') === '';
  }

}

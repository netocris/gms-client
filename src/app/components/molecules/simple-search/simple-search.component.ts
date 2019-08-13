import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: ['./simple-search.component.css']  
})
export class SimpleSearchComponent implements OnInit {

  @Input()
  inputValueModel: string = 'inputValueModel';
  
  @Input()
  inputPlaceHolder: string = '';

  @Output()
  searchOutputEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchOutputEvent(value: string): void {
    this.inputValueModel = value;
  }

  search(): void {    
    this.searchOutputEventEmitter.emit(this.inputValueModel);
  }

}

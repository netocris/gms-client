import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simple-search',
  templateUrl: './simple-search.component.html',
  styleUrls: ['./simple-search.component.css']  
})
export class SimpleSearchComponent implements OnInit {

  @Input()
  valueModel: string = 'valueModel';
  
  @Input()
  placeHolder: string = '';

  @Output()
  searchOutputEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchOutputEvent(value: string): void {
    this.valueModel = value;
  }

  search(): void {    
    this.searchOutputEventEmitter.emit(this.valueModel);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecordFilter } from 'src/app/models/record-filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  private filter: RecordFilter;

  @Output()
  private searchOutputEventEmitter;

  constructor() {
    this.searchOutputEventEmitter = new EventEmitter();
  }

  ngOnInit() {
    this.filter = {
      _timestamp: '',
      value: '',
      notes: ''
    }
  }

  search(): void {
    this.searchOutputEventEmitter.next(this.filter);
  }

}

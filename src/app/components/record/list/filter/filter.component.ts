import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IRecordFilter } from 'src/app/models/i-record-filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private filter: IRecordFilter;

  @Output()
  private searchEventEmitter; EventEmitter;

  constructor() {
    this.searchEventEmitter = new EventEmitter();
  }

  ngOnInit() {
    this.filter = {
      _timestamp: '',
      value: '',
      notes: ''
    }
  }

  search(): void {
    this.searchEventEmitter.next(this.filter);
  }

}

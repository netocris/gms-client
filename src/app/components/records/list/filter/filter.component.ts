import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecordFilter } from 'src/app/models/record-filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filter: RecordFilter;

  advancedSearch: boolean;

  @Output()
  searchOutputEventEmitter;

  constructor() {
    this.advancedSearch = false;
    this.searchOutputEventEmitter = new EventEmitter();
  }

  ngOnInit() {
    this.filter = {
      _timestamp: '',
      value: '',
      notes: ''
    }
  }

  toggleSearch(){
    this.advancedSearch = !this.advancedSearch;
  }

  search(): void {
    this.searchOutputEventEmitter.next(this.filter);
  }

}

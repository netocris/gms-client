import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private searchValue: string;

  @Output()
  private searchEventEmitter; EventEmitter;

  constructor() {
    this.searchEventEmitter = new EventEmitter();
  }

  ngOnInit() {
    this.searchValue = '';
  }

  search(): void {
    this.searchEventEmitter.next({
      'searchValue': this.searchValue
    });
  }

}

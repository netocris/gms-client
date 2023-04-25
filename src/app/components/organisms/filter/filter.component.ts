import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/*import { RecordFilter } from 'src/app/models/record-filter';*/

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  /*filter: RecordFilter;*/
  filterValue: string = '';

  advancedSearch: boolean = false;

  @Output()
  searchOutputEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    /*this.filter = {
      _timestamp: '',
      value: '',
      notes: ''
    }*/
  }

  toggleSearch(){
    this.advancedSearch = !this.advancedSearch;
  }

  searchOutputEvent(value: string): void {
    this.filterValue = value;
    console.log('FilterComponent.searchOutputEvent .::. value: ' + value);
    this.searchOutputEventEmitter.next(this.filterValue);
  }

}

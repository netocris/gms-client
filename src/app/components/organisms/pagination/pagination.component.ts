import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Record } from 'src/app/models/record';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'  
})
export class PaginationComponent implements OnInit {

  @Input()
  records: Record[];

  @Input()
  page: number;

  @Input()
  pageSize: number;

  @Output()
  pageOutputEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pageEventEmitter(page: number){
    this.page = page;
    this.pageOutputEventEmitter.emit(this.page);
  }

}

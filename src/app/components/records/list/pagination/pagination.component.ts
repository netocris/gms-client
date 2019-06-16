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
  pageOutputEventEmitter;

  constructor() {
    this.pageOutputEventEmitter = new EventEmitter();
  }

  ngOnInit() {
  }

  pageEventEmitter(page: number){
    this.page = page;
    this.pageOutputEventEmitter.next(this.page);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { IRecord } from 'src/app/models/i-record';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  records: IRecord[];

  @Input()
  page: number;

  @Input()
  pageSize: number;

  constructor() { }

  ngOnInit() {
  }

}

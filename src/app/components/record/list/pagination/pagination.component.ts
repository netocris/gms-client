import { Component, OnInit, Input } from '@angular/core';
import { Record } from 'src/app/models/record';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  records: Record[];

  @Input()
  page: number;

  @Input()
  pageSize: number;

  constructor() { }

  ngOnInit() {
  }

}

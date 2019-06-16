import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { RecordService } from 'src/app/services/record.service';
import { Pagination } from 'src/app/enums/pagination.enum';
import { Record } from 'src/app/models/record';
import { RecordFilter } from 'src/app/models/record-filter';
import { SortEvent, SortableDirective } from 'src/app/directives/sortable.directive';

export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  records: Record[];
  page: number;
  pageSize: number;

  stillLoading: boolean = false;

  @ViewChildren(SortableDirective) 
  headers: QueryList<SortableDirective>;

  constructor(private configService: ConfigService, private recordService: RecordService) { }

  ngOnInit() {
    this.records = [];
    this.page = Number(this.getConfigValue(Pagination.PAGE));
    this.pageSize = Number(this.getConfigValue(Pagination.PAGE_SIZE));
    this.stillLoading = true;

    setTimeout(() => {
      this.recordService.getRecords().subscribe((data: Record[]) => {
        if (data) {
          this.records = data;
          this.stillLoading = false;
        }
      });
    }, 1000);
    
  }

  searchEventEmitter(filter: RecordFilter) {
    if (filter) {
      this.stillLoading = true;
      this.recordService.getRecordsByFilters(filter._timestamp, filter.value, filter.notes).subscribe((data => {
        if (data) {
          this.records = data;
          this.stillLoading = false;
        }
      }));
    }
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    console.log(JSON.stringify(column));

    // sorting countries
    if(direction !== ''){
      this.records = this.records.sort((a,b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      }); 
    }

    /*this.recordService.getRecordsSorted(column, direction).subscribe((data => {
      if (data) {
        this.records = data;
      }
    }));*/
    
  }

  pageEventEmitter(value){
    this.page = value;
  }

  private getConfigValue(key: string): string {
    return this.configService.getStringKey(key);
  }

}

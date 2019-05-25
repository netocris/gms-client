import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { RecordService } from 'src/app/services/record.service';
import { Pagination } from 'src/app/enums/e-pagination';
import { IRecord } from 'src/app/models/i-record';
import { IRecordFilter } from 'src/app/models/i-record-filter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  records: IRecord[];
  page: number;
  pageSize: number;

  constructor(private configService: ConfigService, private recordService: RecordService) {
  }

  ngOnInit() {

    this.records = [];
    this.page = Number(this.getConfigValue(Pagination.PAGE));
    this.pageSize = Number(this.getConfigValue(Pagination.PAGE_SIZE));

    this.recordService.getRecords().subscribe((data: IRecord[]) => {
      if (data) {
        this.records = data;
      }
    });

  }

  searchEventEmitter(filter: IRecordFilter) {
    if (filter) {
      this.recordService.getRecordsByFilters(filter).subscribe((data => {
        if (data) {
          this.records = data;
        }
      }));
    }
  }

  private getConfigValue(key: string): string {
    return this.configService.getStringKey(key);
  }

}

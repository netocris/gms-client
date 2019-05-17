import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/models/record';
import { ConfigService } from 'src/app/services/config.service';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  records: Record[];
  page: number = 1000;
  pageSize: number = 12222;

  constructor(private configService: ConfigService, private recordService: RecordService) { }

  ngOnInit() {

    this.records = [];
    this.page = Number(this.getConfigValue('page'));
    this.pageSize = Number(this.getConfigValue('pageSize'));

    this.recordService.getRecords().subscribe((data: Record[]) => {
      if (data) {
        this.records = data;
      }
    });

  }

  private getConfigValue(key: string): string {
    return this.configService.getStringKey(key);
  }

}

import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/models/record';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  records: Record[] = [];

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.recordService.getRecords().subscribe((data: Record[]) => {
      if (data)
        this.records = data;
    });
  }

}

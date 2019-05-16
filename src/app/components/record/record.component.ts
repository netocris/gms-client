import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { Record } from 'src/app/models/record';
import { NgbTimeStruct, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  recordForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;

  constructor(private fb: FormBuilder, private recordService: RecordService) {
  }

  ngOnInit() {

    const currentDate = new Date();
    const _date = {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      day: currentDate.getDate(),
    }

    const _hour = {
      hour: currentDate.getHours(),
      minute: currentDate.getMinutes(),
      second: currentDate.getSeconds(),
    }

    this.recordForm = this.fb.group({
      value: ['', Validators.required],
      _date: [_date, Validators.required],
      _hour: [_hour, Validators.required],
      notes: ['']
    });

  }

  onSubmit() {

    this.submitted = true;

    if (this.recordForm.invalid) {
      return;
    }

    const val = this.recordForm.controls;

    const _date = val._date.value;
    const _hour = val._hour.value;
    const dt = new Date(_date.year, _date.month - 1, _date.day,
      _hour.hour, _hour.minute, _hour.second);

    const record: Record = {
      _timestamp: dt.getTime(),
      value: val.value.value,
      notes: val.notes.value
    };

    this.recordService.createRecord(record)
      .then(
        resp => {
          this.recordForm.reset();
          this.submitted = false;
          this.success = true;
        },
        err => {
          console.log(err);
        });

  }

}

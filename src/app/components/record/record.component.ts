import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { Record } from 'src/app/models/record';
import { Observable } from 'rxjs';
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

  valueStr: string = '';
  _date: NgbDateStruct;
  _hour: NgbTimeStruct;
  notesStr: string = '';

  constructor(private fb: FormBuilder, private recordService: RecordService) {

  }

  ngOnInit() {

    let dt = new Date();
    this._date = {
      year: dt.getFullYear(),
      month: dt.getMonth() + 2,
      day: dt.getDay(),
    }

    this._hour = {
      hour: dt.getHours(),
      minute: dt.getMinutes(),
      second: dt.getSeconds(),
    }

    this.recordForm = this.fb.group({
      value: ['', Validators.required],
      _date: ['', Validators.required],
      _hour: ['', Validators.required],
      notes: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.recordForm.invalid) {
      return;
    }

    const _date = this.recordForm.controls._date.value;
    const _hour = this.recordForm.controls._hour.value;
    const dt = new Date(_date.year, _date.month - 1, _date.day,
      _hour.hour, _hour.minute, _hour.second);

    const record: Record = {
      _timestamp: dt.getTime(),
      value: this.recordForm.controls.value.value,
      notes: this.recordForm.controls.notes.value
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

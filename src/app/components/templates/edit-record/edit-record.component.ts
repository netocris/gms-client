import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { Record } from 'src/app/models/record';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent extends BaseComponent {

  fg: FormGroup;
  submitted: boolean = false;
  invalid: boolean = false;
  success: boolean = false;

  constructor(private fb: FormBuilder, private recordService: RecordService) {
    super();
  }

  protected ngOnInitCustom(): void {
    const cDate = this.getCurrentDate();
    const _date = {
      year: cDate.getFullYear(),
      month: cDate.getMonth() + 1,
      day: cDate.getDate()
    };
    const _time = {
      hour: cDate.getHours(),
      minute: cDate.getMinutes(),
      second: cDate.getSeconds()
    };

    this.fg = this.fb.group({
      value: ['', Validators.required],
      dt: [_date, Validators.required],
      tm: [_time, Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
    console.log(JSON.stringify(this.fg.value));
    
    this.submitted = true;
    this.invalid = false;
    if (this.fg.invalid) {
      this.submitted = false;
      this.invalid = true;
      return;
    }

    const record = this.fg.value;    
    const _timestamp = new Date(record.dt.year, record.dt.month - 1, record.dt.day,
      record.tm.hour, record.tm.minute, record.tm.second);

    const entity: Record = {
      value: record.value,
      notes: record.notes,
      _timestamp: _timestamp.getTime()
    };
    
    this.recordService.createRecord(entity)
      .then(res => {        
        this.resetForm();
        this.submitted = false;          
        this.success = true;          
      },
      err => {
        console.error(err);
      });

  }

  private getCurrentDate(): Date {
    return new Date();
  }

  private resetForm(): void {

    const cDate = this.getCurrentDate();
    this.fg.reset({
      value: '',
      notes: '',
      dt: {
        year: cDate.getFullYear(),
        month: cDate.getMonth() + 1,
        day: cDate.getDate()
      },
      tm: {
        hour: cDate.getHours(),
        minute: cDate.getMinutes(),
        second: cDate.getSeconds()
      }
    });
  }

}

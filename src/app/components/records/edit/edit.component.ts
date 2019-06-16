import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { Record } from 'src/app/models/record';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent extends BaseComponent {
  
  recordForm: FormGroup;
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

    this.recordForm = this.fb.group({
      value: ['', Validators.required],
      _date: [_date, Validators.required],
      _time: [_time, Validators.required],
      notes: ['']
    });
  }

  onSubmit(record: any) {

    this.submitted = true;
    this.invalid = false;
    if (this.recordForm.invalid) {
      this.submitted = false;
      this.invalid = true;
      return;
    }
    
    const _timestamp = new Date(record._date.year, record._date.month - 1, record._date.day,
      record._time.hour, record._time.minute, record._time.second);

    const entity: Record = {
      value: record.value,
      notes: record.notes,
      _timestamp: _timestamp.getTime()
    };

    setTimeout(() => {

    this.recordService.createRecord(entity)
      .then(
        resp => {
          this.resetForm();
          this.submitted = false;          
          this.success = true;          
        },
        err => {
          console.log(err);
        });
    }, 500);

  }

  private getCurrentDate(): Date {
    return new Date();
  }

  private resetForm(): void {

    const cDate = this.getCurrentDate();
    this.recordForm.reset({
      value: '',
      notes: '',
      _date: {
        year: cDate.getFullYear(),
        month: cDate.getMonth() + 1,
        day: cDate.getDate()
      },
      _time: {
        hour: cDate.getHours(),
        minute: cDate.getMinutes(),
        second: cDate.getSeconds()
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Record } from 'src/app/models/record';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  rForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;

  constructor(private fBuilder: FormBuilder, private recordService: RecordService,
    private dtParserFormater: NgbDateParserFormatter) {
  }

  ngOnInit() {
    this.rForm = this.fBuilder.group({
      value: ['', Validators.required],
      _timestamp: ['', Validators.required],
      notes: ['', '']
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.rForm.invalid) {
      return;
    }

    const record: Record = {
      _timestamp: new Date(this.dtParserFormater.format(this.rForm.controls._timestamp.value)).getTime(),
      value: this.rForm.controls.value.value,
      notes: this.rForm.controls.notes.value
    };

    this.recordService.createRecord(record);

    this.success = true;
    console.log('form submitted success');
  }

}
